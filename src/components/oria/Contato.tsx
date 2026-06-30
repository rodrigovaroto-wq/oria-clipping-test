import { useState } from "react";
import { z } from "zod";
import { ArrowRight } from "./Icons";
import { useContent } from "@/data/oria";
import { toast } from "@/hooks/use-toast";

export const Contato = () => {
  const { CONTATO_INFO, UI } = useContent();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    nome: z.string().trim().min(2, UI.contato.errName).max(100),
    empresa: z.string().trim().min(2, UI.contato.errCompany).max(120),
    email: z.string().trim().email(UI.contato.errEmail).max(200),
    telefone: z.string().trim().max(40).optional().or(z.literal("")),
    mensagem: z.string().trim().min(10, UI.contato.errMessage).max(2000),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const formData = new FormData(formEl);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (response.ok) {
        setSubmitted(true);
        toast({
          title: UI.contato.toastTitle,
          description: UI.contato.toastDesc,
        });
        formEl.reset();
      } else {
        throw new Error("Erro no envio");
      }
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou envie um e-mail diretamente.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-background/25 focus:border-background outline-none py-3 text-[15px] text-background placeholder:text-background/40 transition-colors";

  const labelCls = "font-mono-label text-[10px] text-background/50 block mb-2";

  return (
    <section id="contato" className="bg-foreground text-background">
      <div className="container-oria pt-40 md:pt-48 pb-32 md:pb-40">
        {/* Tópico Contato: à esquerda, com margem inferior generosa antes do bloco centralizado */}
        <div className="font-mono-label text-[10px] text-background/50 mb-12 text-left">
          {UI.contato.label}
        </div>
        {/* Título e demais elementos centralizados */}
        <div className="max-w-[760px] mx-auto text-center mb-20 md:mb-24">
          <h2 className="font-serif-display font-light leading-[1.05] tracking-[-0.025em] mb-6 text-[clamp(30px,3.4vw,44px)]">
            {UI.contato.headingA}
            <em className="italic text-accent-soft font-light">{UI.contato.headingB}</em>
          </h2>
          <p className="text-[16px] leading-[1.6] text-background/70 mb-6 font-light">
            {UI.contato.lead}
          </p>
          <p className="text-[13px] leading-[1.55] text-background/50 italic font-light">
            {UI.contato.note}
          </p>
        </div>

        <div className="grid lg:grid-cols-[40fr_60fr] gap-10 lg:gap-14 items-stretch">
          <div className="flex items-center">
            <div className="w-full h-full min-h-[360px] lg:min-h-[560px]">
              <iframe
                title={UI.contato.mapTitle}
                src="https://www.google.com/maps?q=Rua+do+Rocio,+288,+Vila+Ol%C3%ADmpia,+S%C3%A3o+Paulo,+SP,+04552-010&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[360px] lg:min-h-[560px]"
              />
            </div>
          </div>

          <div>
            <div className="space-y-7 mb-10">
              <div>
                <div className={labelCls}>{UI.contato.email}</div>
                <a
                  href={`mailto:${CONTATO_INFO.email}`}
                  className="font-serif-display text-[18px] border-b border-background/30 hover:border-background transition-colors"
                >
                  {CONTATO_INFO.email}
                </a>
              </div>
              <div>
                <div className={labelCls}>{UI.contato.phone}</div>
                <div className="font-serif-display text-[18px]">{CONTATO_INFO.telefone}</div>
              </div>
              <div>
                <div className={labelCls}>{UI.contato.office}</div>
                <div className="font-serif-display text-[16px] leading-[1.45]">
                  {UI.contato.addrLine1}<br />
                  {UI.contato.addrLine2}<br />
                  {UI.contato.addrLine3}
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="border-t border-background/20 pt-10">
                <p className="font-serif-display text-[22px] font-light leading-[1.3] text-background/90">
                  {UI.contato.toastTitle}
                </p>
                <p className="text-[14px] text-background/55 mt-3 font-light">
                  {UI.contato.toastDesc}
                </p>
              </div>
            ) : (
              <form
                name="contato"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={onSubmit}
                noValidate
                className="border-t border-background/20 pt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6"
              >
                <input type="hidden" name="form-name" value="contato" />
                <p style={{ display: "none" }}>
                  <label>Não preencha: <input name="bot-field" /></label>
                </p>

                <div>
                  <label className={labelCls}>{UI.contato.name}</label>
                  <input name="nome" maxLength={100} className={inputCls} placeholder={UI.contato.placeholderName} />
                  {errors.nome && <p className="text-[12px] text-accent-soft mt-2">{errors.nome}</p>}
                </div>
                <div>
                  <label className={labelCls}>{UI.contato.company}</label>
                  <input name="empresa" maxLength={120} className={inputCls} placeholder={UI.contato.placeholderCompany} />
                  {errors.empresa && <p className="text-[12px] text-accent-soft mt-2">{errors.empresa}</p>}
                </div>
                <div>
                  <label className={labelCls}>{UI.contato.email}</label>
                  <input name="email" type="email" maxLength={200} className={inputCls} placeholder={UI.contato.placeholderEmail} />
                  {errors.email && <p className="text-[12px] text-accent-soft mt-2">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelCls}>{UI.contato.phoneOpt}</label>
                  <input name="telefone" maxLength={40} className={inputCls} placeholder={UI.contato.placeholderPhone} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>{UI.contato.message}</label>
                  <textarea
                    name="mensagem"
                    maxLength={2000}
                    className={inputCls + " resize-none h-[120px]"}
                    placeholder={UI.contato.placeholderMessage}
                  />
                  {errors.mensagem && <p className="text-[12px] text-accent-soft mt-2">{errors.mensagem}</p>}
                </div>
                <div className="sm:col-span-2 pt-2 pb-8">
                  <button type="submit" disabled={submitting} className="btn-inverted">
                    {submitting ? "Enviando..." : UI.contato.submit}
                    <ArrowRight />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
