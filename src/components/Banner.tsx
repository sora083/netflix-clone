import { useState, useEffect } from 'react'
import axios from './../axios'
import { requests } from './../request'
import './Banner.scss'

type movieProps = {
  title?: string
  name?: string
  original_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({})

  // レンダリング時のみ実行
  useEffect(() => {
    async function fetchBannerData() {
      const request = await axios.get(requests.fetchNetflixOriginals)

      // 取得したコンテンツからバナーの表示対象をランダムに洗濯
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      )
      return request
    }
    fetchBannerData()
  }, [])

  // descriptionが指定文字数を超えた場合にtrim
  function truncate(str: any, n: number) {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + '...' : str
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`, // TODO: FIXME
        backgroundPosition: 'center center',
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  )
}
