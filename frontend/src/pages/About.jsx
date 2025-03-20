import React from "react";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";

const about = () => {
  return (
    <div>
      <section class="text-black">
        {/* START CONTENT */}
        <div class="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
          <div class="font-light text-gray-0 sm:text-lg text-gray-900">
            <div className="text-2xl sm:text-4xl font-bold">
              <Title text1={"ABOUT"} text2={"US"} />
            </div>
            <h2 class="mb-4 text-2xl tracking-tight saira-font-bold text-black">
              Power Comes in Response to a Need, Not a Desire – Goku
            </h2>
            <p class="mb-4">
              {" "}
              At{" "}
              <span className="saira-font-bold">
                Otaku<span className="text-violet-500">Mart</span>
              </span>
              , we bring the essence of anime culture to life with high-quality
              clothing, keychains, anime puffs, and more—all at affordable
              prices. Whether you're a die-hard fan of shonen action, a lover of
              kawaii aesthetics, or just looking to express your otaku spirit,
              we’ve got something for you.{" "}
            </p>{" "}
            <p class="mb-4">
              {" "}
              <span className="font-medium">Our mission is simple:</span> blend
              anime passion with everyday fashion and accessories. We believe
              that anime is more than just a genre—it's a lifestyle. That’s why
              we curate a collection that lets you wear your favorite characters
              and stories with pride, all while ensuring top-notch comfort and
              style.{" "}
            </p>{" "}
            <p>
              {" "}
              From stylish anime-inspired apparel to unique collectibles,{" "}
              <span className="saira-font-bold">
                Otaku<span className="text-violet-500">Mart</span>
              </span>{" "}
              is where fandom meets fashion. Whether you're leveling up your
              wardrobe or hunting for the perfect otaku gift, we make sure you
              get the best designs, best quality, and best prices. Join us on
              this adventure and let your anime obsession shine!{" "}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://c4.wallpaperflare.com/wallpaper/887/22/431/anime-fantasy-art-berserk-guts-black-swordsman-hd-wallpaper-preview.jpg"
              alt="Guts from Beserk"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://cdn.pixabay.com/photo/2022/11/23/16/01/sasuke-uchiha-7612378_1280.jpg"
              alt="office content 2"
            />
          </div>
        </div>

        {/* TRUSTED BY  */}
        <div className="mt-6">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl"></h2> */}
              <div className="text-3xl">
                <Title text1={"Trusted by "} text2={"eCommerce Businesses"} />
              </div>

              <p className="mt-4 text-gray-500 sm:text-xl">
                Trust is the foundation of every strong relationship, built over
                time through honesty and reliability. It takes years to earn,
                seconds to break, and a lifetime to rebuild.
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col rounded-lg bg-violet-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Sales
                </dt>

                <dd className="text-4xl font-extrabold text-violet-600 md:text-5xl">
                  ₹4L
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-violet-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Official Stores
                </dt>

                <dd className="text-4xl font-extrabold text-violet-600 md:text-5xl">
                  8
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-violet-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-violet-600 md:text-5xl">
                  86
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-violet-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Satisfied Customers
                </dt>

                <dd className="text-4xl font-extrabold text-violet-600 md:text-5xl">
                  2.3L
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* HOW WE STARTED THIS JOURNEY.... */}
        <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg shadow-gray-700">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-950/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2024{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How We Started This journey
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Otaku Mart began as a passion project aimed at bringing
                high-quality anime merchandise to fans worldwide. Recognizing
                the growing demand for anime-related products, we set out on a
                journey to create a platform where enthusiasts could easily find
                and purchase their favorite collectibles, apparel, and
                accessories. From the initial idea to launching the website, our
                focus has always been on curating an exclusive selection of
                products that resonate with the anime community. With dedication
                and a love for anime culture, Otaku Mart has grown into a go-to
                destination for fans looking to express their passion through
                unique and authentic merchandise.
              </p>
            </div>
          </div>
        </article>

        <NewsLetter />
      </section>
    </div>
  );
};

export default about;
