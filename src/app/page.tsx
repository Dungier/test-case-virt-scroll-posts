import Link from "next/link";
export default function Home() {
  return (
      <main className="w-2/4 flex items-center justify-center mg-2">
          <div
              className="block max-w-[40rem] max-h-[42rem] rounded-lg bg-white text-center dark:bg-neutral-700 mt-5">
              <div className="p-6">
                  <h5
                      className="mb-1 text-xs font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {"Привет, вы на главной странице тестового задания, для просмотра выполнение: перейдите на вкладку PostsPage или используя роут /posts_page, так же вы можете просто кликнуть на котика)"}
                  </h5>
                  <p
                      className="mb-4 mt-6 flex items-center">
                      <Link href={`/posts_page`}>
                          <img style={{borderRadius: "15px", height: "20rem", width: "22rem"}} src='https://sun9-1.userapi.com/impg/z0qxolF6x-NcVxZ_bFyZmFVt_iw0gQhrYohhGw/EmjyKnPAW-Y.jpg?size=736x808&quality=96&sign=af025c0e71634b65ee7caac2262b1f4d&type=album' alt='img'/>
                      </Link>
                  </p>
              </div>
          </div>
      </main>

  );
}