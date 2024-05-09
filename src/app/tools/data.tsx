import { Blog } from "./pages/blog";
import { Cloudflare } from "./pages/cloudflare";
import { Connections } from "./pages/connections";
import { Domains } from "./pages/domains";
import { EncryptedText } from "./pages/encrypted-text";
import { Tasks } from "./pages/tasks";
import { WhatsappRouter } from "./pages/whatsapp-router";

// eslint-disable-next-line import/no-anonymous-default-export
export const toolsData = [
  { name: "texto criptografado", component: <EncryptedText /> },
  { name: "whatsapp router", component: <WhatsappRouter /> },
  { name: "blog", component: <Blog /> },
  { name: "tarefas", component: <Tasks /> },
  { name: "cloudFlare", component: <Cloudflare /> },
  { name: "dominios", component: <Domains /> },
  { name: "conexões", component: <Connections /> },
];
