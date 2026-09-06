# Pedro Queiroz | Video Maker Mobile

Landing page em Next.js para Pedro Queiroz, video maker mobile em Araguaina - TO.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Variaveis de ambiente

Copie `.env.example` para `.env.local` e ajuste:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

- `NEXT_PUBLIC_SITE_URL`: dominio final usado no sitemap, robots e metadados.
- `NEXT_PUBLIC_GA_ID`: ID do Google Analytics 4. O script so carrega apos consentimento.
- `CONTACT_FORM_ENDPOINT`: endpoint server-side para envio real do formulario, como Formspree, Resend via webhook/API propria ou servico equivalente.

Sem `CONTACT_FORM_ENDPOINT`, o formulario valida e retorna sucesso tecnico, mas nao envia para destino externo.

## Conteudo editavel

Procure por `[TEXTO:` no codigo para trocar bio, descricoes, depoimentos, e-mail, CNPJ e textos dos quatro projetos do portfolio.

## Deploy na Vercel

1. Suba o projeto para um repositorio GitHub/GitLab/Bitbucket.
2. Acesse a Vercel e clique em `Add New Project`.
3. Importe o repositorio.
4. Configure as variaveis de ambiente em `Settings > Environment Variables`.
5. Use os defaults da Vercel para Next.js:
   - Build Command: `npm run build`
   - Output: automatico
6. Clique em `Deploy`.
7. Teste primeiro no dominio temporario `*.vercel.app`.

## Comprar e conectar dominio

### Dominio `.com.br` no Registro.br

1. Compre o dominio no [Registro.br](https://registro.br/).
2. Na Vercel, abra o projeto em `Settings > Domains`.
3. Adicione o dominio, por exemplo `pedroqueiroz.com.br`.
4. A Vercel mostrara os registros DNS necessarios.
5. No Registro.br, escolha usar DNS do Registro.br ou nameservers da Vercel.

Configuracao comum usando DNS do Registro.br:

```txt
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### Dominio `.com`

1. Compre o dominio em um registrador como Cloudflare, Namecheap, GoDaddy ou similar.
2. Adicione o dominio na Vercel em `Settings > Domains`.
3. Configure os registros exibidos pela Vercel. Normalmente:

```txt
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

## HTTPS

A Vercel emite HTTPS automaticamente depois que os registros DNS propagam. Em `Settings > Domains`, confirme que o dominio aparece como `Valid Configuration` e que o certificado esta ativo. A propagacao pode levar alguns minutos ou algumas horas.

## QA antes de publicar

- Testar em celular Android e iPhone/Safari.
- Testar Chrome/Edge ou Safari desktop.
- Conferir WhatsApp principal e CTA final com o numero `5563992435592`.
- Conferir Instagram: `https://www.instagram.com/pedrovideomakerr/`.
- Conferir todas as ancoras do menu.
- Configurar `CONTACT_FORM_ENDPOINT` e testar envio real.
- Aceitar/rejeitar cookies e verificar que o GA so carrega apos aceite.
- Abrir uma URL inexistente e validar a pagina 404.
- Conferir preview do link no WhatsApp/Instagram depois do deploy.

## Comandos de verificacao

```bash
npm test
npm run lint
npm run build
```
