// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $AgentsFilter from "./islands/AgentsFilter.tsx";
import * as $FAQAccordion from "./islands/FAQAccordion.tsx";
import * as $FormModal from "./islands/FormModal.tsx";
import * as $HeroButtons from "./islands/HeroButtons.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/AgentsFilter.tsx": $AgentsFilter,
    "./islands/FAQAccordion.tsx": $FAQAccordion,
    "./islands/FormModal.tsx": $FormModal,
    "./islands/HeroButtons.tsx": $HeroButtons,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
