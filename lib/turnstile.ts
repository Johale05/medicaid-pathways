import { requireEnv } from "./env";

export async function verifyTurnstile(token: string, ip?: string) {
  const secret = requireEnv("TURNSTILE_SECRET_KEY");

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  if (!resp.ok) return { ok: false as const, data: null };
  const data = (await resp.json()) as { success: boolean; ["error-codes"]?: string[] };
  return { ok: data.success as boolean, data };
}
