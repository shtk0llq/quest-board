<?php

use App\Http\Controllers\OAuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/auth/{provider}/redirect', [OAuthController::class, 'redirectToProvider']);
    Route::get('/auth/{provider}/callback', [OAuthController::class, 'handleProviderCallback']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [OAuthController::class, 'logout']);
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
