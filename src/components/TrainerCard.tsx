import { memo, VFC } from 'react'

type Props = {}

const TrainerCard: VFC<Props> = () => (
  <article className="border border-uma-border3 rounded py-2 px-3">
    <header className="text-uma-text1 font-bold border-b h-10 flex items-center mb-3">
      <h1>さいと</h1>
    </header>
    <section className="grid grid-cols-2 gap-2 mb-4">
      <div>
        <dl>
          <dt className="font-bold text-uma-text2 border-b-2 border-uma-text2">
            トレーナーID
          </dt>
          <dd className="text-uma-text1 font-bold">773 125 409</dd>
        </dl>
      </div>
      <div></div>
      <dl>
        <dt className="font-bold text-uma-text2 border-b-2 border-uma-text2">
          代表ウマ娘
        </dt>
        <dd className="text-uma-text1 font-bold">トウカイテイオー</dd>
      </dl>
      <dl>
        <dt className="font-bold text-uma-text2 border-b-2 border-uma-text2">
          育成サポート
        </dt>
        <dd className="text-uma-text1 font-bold">サイレンススズカ</dd>
      </dl>
    </section>
    <p className="text-uma-text1 font-bold text-sm mb-4">
      翌月に誕生祭を控えた王は建築家、宝石商、高田健志の三人にこの祭典にふさわしい品を献上するよう求めた。すぐさま建築家は万里の長城さながらの城壁を持つ巨大な城を築き上げた。宝石商も負けじと、こぶし程もある大きなダイヤを用意した。高田健志は米を炊いて唐揚げを揚げた。
    </p>
    <footer className="text-uma-text2 text-sm font-bold">
      <time dateTime="">2020/3/2 0:00</time> 投稿
    </footer>
  </article>
)

export default memo(TrainerCard)
