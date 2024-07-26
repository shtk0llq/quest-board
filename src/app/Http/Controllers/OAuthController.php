<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class OAuthController extends Controller
{
    /**
     * プロバイダーへのリダイレクトURLを取得する
     *
     * @param string $provider
     * @return JsonResponse
     */
    public function redirectToProvider(string $provider): JsonResponse
    {
        $url = Socialite::driver($provider)->redirect()->getTargetUrl();
        return response()->json(['redirect_url' => $url]);
    }

    /**
     * プロバイダーからのコールバックを処理する
     *
     * @param string $provider
     * @return RedirectResponse
     */
    public function handleProviderCallback(string $provider): RedirectResponse
    {
        $oAuthUser = Socialite::driver($provider)->user();

        $user = User::updateOrCreate([
            'email' => $oAuthUser->getEmail(),
        ], [
            'name' => $oAuthUser->getName(),
            'email' => $oAuthUser->getEmail(),
        ]);

        Provider::updateOrCreate([
            'provider' => $provider,
            'provider_user_id' => $oAuthUser->getId(),
        ], [
            'user_id' => $user->id,
            'provider' => $provider,
            'provider_user_id' => $oAuthUser->id,
            'access_token' => $oAuthUser->token,
            'refresh_token' => $oAuthUser->refresh_token,
            'expires_at' => $oAuthUser->expiresIn,
        ]);

        Auth::login($user);

        return redirect('/questions');
    }

    /**
     * ユーザーをアプリケーションからログアウトさせる。
     */
    public function logout(Request $request): RedirectResponse | JsonResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        if ($request->expectsJson()) {
            return response()->json(['message' => 'ログアウトに成功しました。']);
        }

        return redirect('/login');
    }
}
