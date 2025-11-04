-- -------------------------------------------------
-- init.sql – create rate_limits and blocklist tables
-- -------------------------------------------------

-- Table: rate_limits
CREATE TABLE IF NOT EXISTS public.rate_limits (
    id          SERIAL PRIMARY KEY,          -- auto‑increment integer
    ip          VARCHAR(45) NOT NULL,       -- IPv4/IPv6 fits in 45 chars
    retry_after INTEGER NOT NULL,           -- seconds to wait before next request
    base_url    VARCHAR(255) NOT NULL        -- the URL the limit applies to
);

-- Table: blocklist
CREATE TABLE IF NOT EXISTS public.blocklist (
    id        SERIAL PRIMARY KEY,            -- auto‑increment integer
    ip        VARCHAR(45) NOT NULL,         -- IP to block
    starts_at INTEGER NOT NULL,             -- epoch seconds when block starts
    ends_at   INTEGER NOT NULL              -- epoch seconds when block ends
);