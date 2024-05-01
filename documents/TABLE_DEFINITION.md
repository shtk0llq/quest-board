# テーブル定義書

### users
| COLUMN           | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------------- | --------- | ------- | ------- | -------- | -------------- |
| user_id          | BIGINT    | PRIMARY |         | o        | o              |
| github_id        | VARCHAR   | UNIQUE  |         | o        |                |
| name             | VARCHAR   |         |         | o        |                |
| email            | VARCHAR   |         |         | o        |                |
| access_token     | VARCHAR   |         |         | o        |                |
| refresh_token    | VARCHAR   |         |         | o        |                |
| token_expires_at | TIMESTAMP |         |         | o        |                |
| created_at       | TIMESTAMP |         | NOW     | o        |                |
| updated_at       | TIMESTAMP |         | NOW     | o        |                |

---

### profiles
| COLUMN       | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ------------ | --------- | ------- | ------- | -------- | -------------- |
| profile_id   | BIGINT    | PRIMARY |         | o        | o              |
| user_id      | BIGINT    | FOREIGN |         | o        |                |
| image_url    | TEXT      |         |         |          |                |
| introduction | TEXT      |         |         |          |                |
| created_at   | TIMESTAMP |         | NOW     | o        |                |
| updated_at   | TIMESTAMP |         | NOW     | o        |                |

---

### questions
| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| question_id | BIGINT    | PRIMARY |         | o        | o              |
| user_id     | BIGINT    | FOREIGN |         | o        |                |
| title       | VARCHAR   |         |         | o        |                |
| body        | TEXT      |         |         | o        |                |
| is_resolved | BOOLEAN   |         | FALSE   | o        |                |
| views       | BIGINT    |         | 0       | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### answers
| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| answer_id   | BIGINT    | PRIMARY |         | o        | o              |
| question_id | BIGINT    | FOREIGN |         | o        |                |
| user_id     | BIGINT    | FOREIGN |         | o        |                |
| body        | TEXT      |         |         | o        |                |
| is_best     | BOOLEAN   |         | FALSE   | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### tags
| COLUMN     | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------- | --------- | ------- | ------- | -------- | -------------- |
| tag_id     | BIGINT    | PRIMARY |         | o        | o              |
| name       | VARCHAR   |         |         | o        |                |
| created_at | TIMESTAMP |         | NOW     | o        |                |
| updated_at | TIMESTAMP |         | NOW     | o        |                |

---

### question_tags
| COLUMN      | TYPE      | KEY             | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | --------------- | ------- | -------- | -------------- |
| question_id | BIGINT    | PRIMARY FOREIGN |         | o        |                |
| tag_id      | BIGINT    | PRIMARY FOREIGN |         | o        |                |
| created_at  | TIMESTAMP |                 | NOW     | o        |                |
| updated_at  | TIMESTAMP |                 | NOW     | o        |                |

---

### badges
| COLUMN     | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------- | --------- | ------- | ------- | -------- | -------------- |
| badge_id   | BIGINT    | PRIMARY |         | o        | o              |
| name       | VARCHAR   |         |         | o        |                |
| created_at | TIMESTAMP |         | NOW     | o        |                |
| updated_at | TIMESTAMP |         | NOW     | o        |                |

---

### badge_conditions
| COLUMN          | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| --------------- | --------- | ------- | ------- | -------- | -------------- |
| condition_id    | BIGINT    | PRIMARY |         | o        | o              |
| badge_id        | BIGINT    | FOREIGN |         | o        |                |
| condition_type  | VARCHAR   |         |         | o        |                |
| condition_value | VARCHAR   |         |         | o        |                |
| created_at      | TIMESTAMP |         | NOW     | o        |                |
| updated_at      | TIMESTAMP |         | NOW     | o        |                |

---

### user_badges
| COLUMN     | TYPE      | KEY             | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------- | --------- | --------------- | ------- | -------- | -------------- |
| user_id    | BIGINT    | PRIMARY FOREIGN |         | o        |                |
| badge_id   | BIGINT    | PRIMARY FOREIGN |         | o        |                |
| created_at | TIMESTAMP |                 | NOW     | o        |                |
| updated_at | TIMESTAMP |                 | NOW     | o        |                |

---

### bookmarks
| COLUMN      | TYPE      | KEY             | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | --------------- | ------- | -------- | -------------- |
| user_id     | BIGINT    | PRIMARY FOREIGN |         | o        |                |
| question_id | BIGINT    | PRIMARY FOREIGN |         | o        |                |
| created_at  | TIMESTAMP |                 | NOW     | o        |                |
| updated_at  | TIMESTAMP |                 | NOW     | o        |                |

---

### notifications
| COLUMN          | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| --------------- | --------- | ------- | ------- | -------- | -------------- |
| notification_id | BIGINT    | PRIMARY |         | o        | o              |
| user_id         | BIGINT    | FOREIGN |         | o        |                |
| type            | VARCHAR   |         |         | o        |                |
| content         | TEXT      |         |         | o        |                |
| url             | TEXT      |         |         | o        |                |
| is_read         | BOOLEAN   |         | FALSE   | o        |                |
| created_at      | TIMESTAMP |         | NOW     | o        |                |
| updated_at      | TIMESTAMP |         | NOW     | o        |                |

---

### comments
| COLUMN     | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ---------- | --------- | ------- | ------- | -------- | -------------- |
| comment_id | BIGINT    | PRIMARY |         | o        | o              |
| user_id    | BIGINT    | FOREIGN |         | o        |                |
| post_id    | BIGINT    | FOREIGN |         | o        |                |
| body       | TEXT      |         |         | o        |                |
| created_at | TIMESTAMP |         | NOW     | o        |                |
| updated_at | TIMESTAMP |         | NOW     | o        |                |

---

### reports
| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| report_id   | BIGINT    | PRIMARY |         | o        | o              |
| user_id     | BIGINT    | FOREIGN |         | o        |                |
| post_id     | BIGINT    | FOREIGN |         | o        |                |
| reason      | VARCHAR   |         |         | o        |                |
| description | TEXT      |         |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |

---

### scores
| COLUMN      | TYPE      | KEY     | DEFAULT | NOT NULL | AUTO INCREMENT |
| ----------- | --------- | ------- | ------- | -------- | -------------- |
| score_id    | BIGINT    | PRIMARY |         | o        | o              |
| user_id     | BIGINT    | FOREIGN |         | o        |                |
| score       | INTEGER   |         |         | o        |                |
| created_at  | TIMESTAMP |         | NOW     | o        |                |
| updated_at  | TIMESTAMP |         | NOW     | o        |                |
