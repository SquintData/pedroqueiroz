# Pedro Queiroz — Video Maker Mobile

Landing page em Next.js para apresentação de serviços e trabalhos de vídeo, com formulário de contato e seções editáveis.

## Tecnologias

Next.js 15, React 19, TypeScript, Tailwind CSS, ESLint e Vitest.

## Recursos presentes no código

- Seções de apresentação, serviços, portfólio e contato.
- Formulário com validação e rota de envio no servidor.
- Consentimento para carregamento do Google Analytics.
- Rotas de privacidade, sitemap, robots, imagem de compartilhamento e página 404.
- Testes de conteúdo e validação do formulário.

## Executar localmente

Use Node.js 20+ e npm. Na raiz:

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

| Variável | Finalidade |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Endereço usado nos metadados, sitemap e robots |
| `NEXT_PUBLIC_GA_ID` | Identificador do Analytics, quando configurado |
| `CONTACT_FORM_ENDPOINT` | Destino de envio do formulário, acessado pelo servidor |

Sem `CONTACT_FORM_ENDPOINT`, a rota apenas valida os dados e informa que o envio real precisa ser configurado. Uma resposta de sucesso nessa condição não representa uma mensagem entregue.

## Estrutura

```text
src/app/             Páginas, metadados e API de contato
src/components/      Componentes e seções
src/content/         Conteúdo editável e testes
src/lib/             Validação de contato e testes
public/              Ícones e manifesto
```

## Verificação

```powershell
npm test
npm run lint
npm run build
```

Os comandos estão definidos no projeto. Funcionamento em dispositivos, entrega real do formulário e implantação exigem validação própria.

## Conteúdo e configuração

Os dados editáveis ficam em [src/content/site.ts](src/content/site.ts). Confira textos, imagens, contatos e depoimentos antes de publicar.

As instruções anteriores de implantação e edição foram preservadas em [Configuração e implantação](docs/setup.md). Esta atualização organiza somente a documentação do GitHub.
