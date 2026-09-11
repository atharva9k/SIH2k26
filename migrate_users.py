import sqlite3
import os

dbs = [
    os.path.abspath('gem-compliance-ai/backend/gem_compliance.db'),
    os.path.abspath('gem_compliance.db')
]

for p in dbs:
    if not os.path.exists(p):
        continue
    try:
        conn = sqlite3.connect(p)
        cur = conn.cursor()
        cols = [r[1] for r in cur.execute('PRAGMA table_info(users)').fetchall()]
        if 'email' not in cols:
            cur.execute('ALTER TABLE users ADD COLUMN email VARCHAR(120)')
        if 'phone' not in cols:
            cur.execute('ALTER TABLE users ADD COLUMN phone VARCHAR(20)')
        cur.execute("UPDATE users SET email = 'rajesh.verma@gem.gov.in', phone = '+91 98200 12345' WHERE username = 'officer'")
        conn.commit()
        print('Migrated:', p, 'Cols:', [r[1] for r in cur.execute('PRAGMA table_info(users)').fetchall()])
        conn.close()
    except Exception as e:
        print('Error on', p, e)
