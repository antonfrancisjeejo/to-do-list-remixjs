import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export function meta() {
  return { title: "To do List App" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}
