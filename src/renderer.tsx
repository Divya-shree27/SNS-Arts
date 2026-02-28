import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ students }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>{students}</body>
    </html>
  )
})
