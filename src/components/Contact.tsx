export default function Contact() {
  return (
    <section className="text-bgcolor body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative bg-transparent outline-none border-[0.2rem] border-maincolor shadow-[0_0_2em] text-[2rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-base font-semibold tracking-tight dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9144015370557!2d66.99199262750855!3d24.934985796117125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36aaca6dd2783%3A0xce2500051e585075!2sAl%20Fatah%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727717439298!5m2!1sen!2s"
            style={{ filter: " contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-light relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-bgcolor tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-secondbgcolor">
                Al-Fatah Colony Orangi Town Number 10 Karachi
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-bgcolor tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-maincolor leading-relaxed">
                hunainislam09@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">0318-2347330</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-light dark:bg-dark flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-maincolor hover:text-bgcolor cursor-pointer dark:text-light dark:hover:text-maincolor">
            CONTACT-US
          </h2>
          <p className="leading-relaxed mb-5 text-bgcolor dark:text-gray-500">
            Get in touch with us for assistance, questions, or suggestions
            anytime!
          </p>
          <form
            target="_blank"
            action="https://formspree.io/f/xkgwdyrq"
            method="POST"
          >
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-xl font-medium text-gray-600 dark:text-light"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-transparent outline-none border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[2rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-base font-semibold tracking-tight py-2 px-6 w-full mt-2 dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-xl font-medium text-gray-600 dark:text-light"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent outline-none border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[2rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-base font-semibold tracking-tight py-2 px-6 w-full mt-2 dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="subject"
                className="leading-7 text-xl font-medium text-gray-600 dark:text-light"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="bg-transparent outline-none border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[2rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-base font-semibold tracking-tight py-2 px-6 w-full mt-2 dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-xl font-medium text-gray-600 dark:text-light"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-transparent outline-none border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[2rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-base font-semibold tracking-tight py-1 px-6 w-full mt-2 dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20"
                defaultValue={""}
                required
              />
            </div>
            <button className="inline-block outline-none px-6 py-3 bg-maincolor border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[1.5rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-2xl font-semibold tracking-tight dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20 mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
