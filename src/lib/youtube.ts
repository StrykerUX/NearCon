export type YTVideo = {
  id: string
  title: string
  thumbnail: string
}

const VIDEO_IDS = [
  '5mweXYl8kqI', 'bmzsSS8vY14', 'tFm2FsxdDYk', 'v_Pcmz_RClQ',
  'G0LOsBihshk', 'QJdJUqRUH_M', '5rWFHGcbV70', 'd385TTn-0L8',
  'KGmzj3kyD3s', 'QJBSw9IOuLE', 'O7LGqNJnOKY', 'OKbqrnob6PM',
  'xrutnC9HTJQ', 'ebLjAd67bw0', 'JRiYn0JPiH0', 'cxoZZfZnICA',
  '5M2TTeIUtGc', '6b1Qb8oAn2k'
]

export async function getVideos(): Promise<YTVideo[]> {
  const results = await Promise.all(
    VIDEO_IDS.map(async (id) => {
      try {
        const res = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`,
          { next: { revalidate: 86400 } }
        )
        const data = await res.json()
        return {
          id,
          title: data.title ?? '',
          thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        }
      } catch {
        return { id, title: '', thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg` }
      }
    })
  )
  return results
}
