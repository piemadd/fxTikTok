export default function MetaHelper(
  tags: {
    name: string
    content: string | null
  }[],
  alternate?: {
    [key: string]: string | number
  }
): JSX.Element {
  let alternateUrl = new URL('https://fxtiktok-rewrite.piero.workers.dev/generate/alternate')

  if (alternate) {
    for (const key in alternate) {
      alternateUrl.searchParams.set(key, encodeURIComponent(alternate[key].toString()))
    }
  }

  return (
    <html lang='en'>
      <head>
        {tags.map((tag) => (tag.content ? <meta property={tag.name} content={tag.content} /> : null))}
        {alternate ? <link rel='alternate' href={alternateUrl.toString()} type='application/json+oembed' /> : null}
      </head>
    </html>
  )
}
