CREATE TABLE public.email_rate_limit_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT,
  email TEXT,
  template_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_email_rate_limit_ip_created ON public.email_rate_limit_attempts (ip_address, created_at DESC);
CREATE INDEX idx_email_rate_limit_email_created ON public.email_rate_limit_attempts (email, created_at DESC);
CREATE INDEX idx_email_rate_limit_created ON public.email_rate_limit_attempts (created_at);

ALTER TABLE public.email_rate_limit_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can read rate limit attempts"
ON public.email_rate_limit_attempts
FOR SELECT
USING (auth.role() = 'service_role');

CREATE POLICY "Service role can insert rate limit attempts"
ON public.email_rate_limit_attempts
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role can delete rate limit attempts"
ON public.email_rate_limit_attempts
FOR DELETE
USING (auth.role() = 'service_role');