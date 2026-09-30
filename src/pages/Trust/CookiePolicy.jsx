import React, { useEffect } from "react";

// Cookie Policy datasets faithfully copied from https://krisp.ai/cookie-policy/
const cookieGroups = [
  {
    title: "Strictly necessary cookies",
    description:
      "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
    cookies: [
      {
        name: "OptanonConsent",
        host: "krisp.ai",
        duration: "364 days",
        desc: "This cookie is set by the cookie compliance solution from OneTrust. It stores information about the categories of cookies the site uses and whether visitors have given or withdrawn consent for the use of each category. This enables site owners to prevent cookies in each category from being set in the user's browser, when consent is not given. The cookie has a normal lifespan of one year, so that returning visitors to the site will have their preferences remembered. It contains no information that can identify the site visitor.",
      },
      {
        name: "_tldtest_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        host: "krisp.ai",
        duration: "Session",
        desc: "Amplitude analytics domain testing identifier.",
      },
      {
        name: "__cfruid",
        host: "help.krisp.ai",
        duration: "Session",
        desc: "Cookie associated with sites using CloudFlare, used to identify trusted web traffic.",
      },
      {
        name: "__cf_bm",
        host: "help.krisp.ai",
        duration: "Less than a day",
        desc: "The __cf_bm cookie is a cookie necessary to support Cloudflare Bot Management, currently in private beta. As part of our bot management service, this cookie helps manage incoming traffic that matches criteria associated with bots.",
      },
      {
        name: "G_ENABLED_IDPS",
        host: "account.krisp.ai",
        duration: "Does not expire",
        desc: "This cookie is used to securely log in to the website with a Google account.",
      },
      {
        name: "__cf_bm",
        host: "voice-ai-newsletter.krisp.ai",
        duration: "Less than a day",
        desc: "Cloudflare Bot Management cookie supporting newsletter delivery safety.",
      },
      {
        name: "cf_use_ob",
        host: "help.krisp.ai",
        duration: "Less than a day",
        desc: "Associated with sites using Cloudflare. Used to improve page load times and override security restrictions based on visitor IP address.",
      },
      {
        name: "_cfuvid",
        host: "krisp.ai",
        duration: "Session",
        desc: "The _cfuvid cookie is used by Cloudflare to distinguish individual users who share the same IP address for rate limiting rules.",
      },
      {
        name: "OptanonAlertBoxClosed",
        host: "krisp.ai",
        duration: "364 days",
        desc: "Set by OneTrust cookie compliance solution once visitors dismiss the banner so the message is not shown repeatedly.",
      },
      {
        name: "__cf_bm",
        host: "resources.krisp.ai",
        duration: "Less than a day",
        desc: "Cloudflare bot management cookie for resource assets.",
      },
      {
        name: "_rdt_em",
        host: "krisp.ai",
        duration: "89 days",
        desc: "Associated with Reddit which is used to manage session state and user interactions.",
      },
      {
        name: "cf_chl_cc_xxxxxxxxxxxxxxxxxxxxx",
        host: "help.krisp.ai",
        duration: "Session",
        desc: "Cloudflare challenge token cookie for security validation.",
      },
      {
        name: "dd_cookie_test_",
        host: "voice-ai-newsletter.krisp.ai",
        duration: "Less than a day",
        desc: "Test cookie for cookie acceptance check.",
      },
      {
        name: "_cfuvid",
        host: "radar.cloudflare.com",
        duration: "Session",
        desc: "Cloudflare security identifier for shared IP rate limiting.",
      },
      {
        name: "m",
        host: "m.stripe.com",
        duration: "399 days",
        desc: "Associated with Stripe payment processing software for security and fraud prevention.",
      },
    ],
  },
  {
    title: "Targeting cookies",
    description:
      "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
    cookies: [
      {
        name: "AMP_TLDTEST",
        host: "krisp.ai",
        duration: "Session",
        desc: "Supports Amplitude product analytics.",
      },
      {
        name: "ajs_user_id",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Helps track visitor usage, events, target marketing, and measure application performance and stability.",
      },
      {
        name: "_rdt_uuid",
        host: "krisp.ai",
        duration: "89 days",
        desc: "Set by Reddit and used for tracking views of embedded videos and performance of advertisements.",
      },
      {
        name: "_gat_UA-XXXXXX-X",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Google Analytics throttling cookie.",
      },
      {
        name: "ln_or",
        host: "account.krisp.ai",
        duration: "Less than a day",
        desc: "LinkedIn cookie used to determine if Oribi analytics can be carried out on a specific domain.",
      },
      {
        name: "_uetsid",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Used by Bing to determine what ads should be shown that may be relevant to the end user perusing the site.",
      },
      {
        name: "AMP_MKTG_01b641bf88",
        host: "krisp.ai",
        duration: "364 days",
        desc: "Supports Amplitude product and marketing attribution analytics.",
      },
      {
        name: "AMP_01b641bf88",
        host: "krisp.ai",
        duration: "364 days",
        desc: "Supports Amplitude product telemetry analytics.",
      },
      {
        name: "_gcl_au",
        host: "krisp.ai",
        duration: "89 days",
        desc: "Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.",
      },
      {
        name: "_twpid",
        host: "krisp.ai",
        duration: "389 days",
        desc: "Associated with static.ads-twitter.com to manage advertising-related conversion functions.",
      },
      {
        name: "_fbp",
        host: "krisp.ai",
        duration: "89 days",
        desc: "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.",
      },
      {
        name: "dd_user_id",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Associated with Dreamdata Analytics used to track a known user across multiple visits.",
      },
      {
        name: "bcookie",
        host: "linkedin.com",
        duration: "364 days",
        desc: "LinkedIn browser identifier cookie for advertising and social features.",
      },
      {
        name: "AnalyticsSyncHistory",
        host: "linkedin.com",
        duration: "29 days",
        desc: "LinkedIn advertising attribution sync cookie.",
      },
      {
        name: "li_sugr",
        host: "linkedin.com",
        duration: "89 days",
        desc: "Used to store browser details for LinkedIn advertising tracking.",
      },
      {
        name: "UserMatchHistory",
        host: "linkedin.com",
        duration: "29 days",
        desc: "Used by LinkedIn to track visitors across multiple websites to present relevant advertisements.",
      },
      {
        name: "TESTCOOKIESENABLED",
        host: "www.youtube.com",
        duration: "Less than a day",
        desc: "YouTube cookie used to check if browser allows cookie storage for video player.",
      },
      {
        name: "guest_id_ads",
        host: "twitter.com",
        duration: "399 days",
        desc: "Associated with X (formerly Twitter) for targeting and ad measurement.",
      },
      {
        name: "IDE",
        host: "doubleclick.net",
        duration: "389 days",
        desc: "Used by Google DoubleClick to register and report user actions after viewing or clicking ads.",
      },
      {
        name: "MUID",
        host: "bing.com",
        duration: "389 days",
        desc: "Used by Microsoft Bing Ads as a unique user identifier.",
      },
    ],
  },
  {
    title: "Functional cookies",
    description:
      "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
    cookies: [
      {
        name: "_zendesk_session",
        host: "help.krisp.ai",
        duration: "Session",
        desc: "This cookie holds session information for root access applications in Zendesk.",
      },
      {
        name: "tap_vid",
        host: "krisp.ai",
        duration: "364 days",
        desc: "User affiliate tracking identifier.",
      },
      {
        name: "wp-wpml_current_language",
        host: "krisp.ai",
        duration: "Session",
        desc: "Used to store the current language preference of the site user.",
      },
      {
        name: "_zendesk_authenticated",
        host: "help.krisp.ai",
        duration: "Less than a day",
        desc: "Used to store a binary variable determining whether a user has been authenticated in Zendesk.",
      },
      {
        name: "cf_clearance",
        host: "help.krisp.ai",
        duration: "364 days",
        desc: "Used to verify user is not a bot; user/system has solved a security challenge successfully.",
      },
      {
        name: "refSource",
        host: "krisp.ai",
        duration: "29 days",
        desc: "Stores referrer source information.",
      },
      {
        name: "ajs_anonymous_id",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Helps count how many people visit a certain site by tracking if you have visited before.",
      },
      {
        name: "hubspotutk",
        host: "krisp.ai",
        duration: "179 days",
        desc: "Associated with HubSpot platform. Stores user authentication and form submission history.",
      },
      {
        name: "_help_center_session",
        host: "help.krisp.ai",
        duration: "Session",
        desc: "Aids in maintaining visitor session for Zendesk Guide knowledge base.",
      },
      {
        name: "_zendesk_shared_session",
        host: "help.krisp.ai",
        duration: "Session",
        desc: "Holds session information for sharing across Zendesk applications.",
      },
      {
        name: "muxData",
        host: "voice-ai-newsletter.krisp.ai",
        duration: "7,299 days",
        desc: "Used with video player so interrupted viewers can resume video playback seamlessly.",
      },
      {
        name: "__tld__",
        host: "krisp.ai",
        duration: "Session",
        desc: "From Segment Analytics.js library; helps determine top-level domain for visitor session.",
      },
      {
        name: "cookietest",
        host: "js.hs-analytics.net",
        duration: "Less than a day",
        desc: "Checks if the visitor's browser allows cookies.",
      },
      {
        name: "_GRECAPTCHA",
        host: "www.recaptcha.net",
        duration: "179 days",
        desc: "Google reCAPTCHA risk analysis cookie to prevent abuse and fraudulent spam submissions.",
      },
    ],
  },
  {
    title: "Performance cookies",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
    cookies: [
      {
        name: "__hssc",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Associated with websites built on the HubSpot platform; used for site analytics session counts.",
      },
      {
        name: "_ga",
        host: "krisp.ai",
        duration: "399 days",
        desc: "Used by Google Analytics to distinguish unique users by assigning a randomly generated client identifier.",
      },
      {
        name: "dd_anonymous_id",
        host: "krisp.ai",
        duration: "364 days",
        desc: "Associated with Dreamdata Analytics to track user sessions across multiple page interactions.",
      },
      {
        name: "_ga_xxxxxxx",
        host: "krisp.ai",
        duration: "729 days",
        desc: "Google Analytics 4 session state container.",
      },
      {
        name: "_gid",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Google Analytics cookie used to count and track pageviews.",
      },
      {
        name: "_pk_id*",
        host: "krisp.ai",
        duration: "392 days",
        desc: "Associated with Piwik/Matomo analytics platform to measure visitor trends.",
      },
      {
        name: "krispSessionId",
        host: "krisp.ai",
        duration: "Session",
        desc: "Internal session telemetry tracker for Krisp web applications.",
      },
      {
        name: "__hstc",
        host: "krisp.ai",
        duration: "179 days",
        desc: "HubSpot analytics tracking cookie recording timestamps of visits.",
      },
      {
        name: "_uetvid",
        host: "krisp.ai",
        duration: "389 days",
        desc: "Utilised by Microsoft Bing Ads for visitor engagement reporting.",
      },
      {
        name: "__hssrc",
        host: "krisp.ai",
        duration: "Session",
        desc: "Used by HubSpot to determine if the visitor has restarted their browser session.",
      },
      {
        name: "anonymousId",
        host: "krisp.ai",
        duration: "1,999 days",
        desc: "Client-side anonymous visitor device identity tracker.",
      },
      {
        name: "_hjSession_xxxxxx",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Hotjar session cookie to attribute subsequent page visits within the session window.",
      },
      {
        name: "_hjFirstSeen",
        host: "krisp.ai",
        duration: "Less than a day",
        desc: "Identifies a new user's first session on a website for Hotjar user feedback analysis.",
      },
      {
        name: "JSESSIONID",
        host: "nr-data.net",
        duration: "Session",
        desc: "Controlled by New Relic for monitoring application performance and server response times.",
      },
    ],
  },
  {
    title: "Social media cookies",
    description:
      "These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages you see on other websites you visit. If you do not allow these cookies you may not be able to use or see these sharing tools.",
    cookies: [],
    emptyMessage: "We do not use any cookies in this category.",
  },
];

/**
 * Recreated authentic Krisp Cookie Policy page.
 * Faithful replica of https://krisp.ai/cookie-policy/
 */
export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy | Silgate Replica";
  }, []);

  return (
    <div className="w-full bg-white text-[#131032] font-sans antialiased min-h-screen">
      <section className="w-[calc(100%-48px)] max-w-[1280px] mx-auto py-16 md:py-24">
        {/* Main Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#131032] leading-[1.2] tracking-tight mb-8 md:mb-12">
          Cookie Policy
        </h1>

        <div className="space-y-12">
          {/* Header & Intro */}
          <div>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#131032] mb-4">
              Cookie List
            </h2>
            <p className="text-[16px] text-[#525069] leading-[28px] max-w-5xl">
              A cookie is a small piece of data (text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called first-party cookies. We also use third-party cookies – which are cookies from a domain different than the domain of the website you are visiting – for our advertising and marketing efforts. More specifically, we use cookies and other tracking technologies for the following purposes:
            </p>
          </div>

          {/* Cookie Groups */}
          <div className="space-y-16">
            {cookieGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-4">
                <h3 className="text-[22px] sm:text-[26px] font-bold text-[#131032] capitalize">
                  {group.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#525069] leading-[26px] max-w-5xl">
                  {group.description}
                </p>

                {group.emptyMessage ? (
                  <div className="bg-[#f8f9fa] border border-[#e4e7ea] rounded-xl p-6 text-[15px] text-[#75738b] italic">
                    {group.emptyMessage}
                  </div>
                ) : (
                  <div className="w-full overflow-x-auto rounded-xl border border-[#e4e7ea] shadow-sm mt-4">
                    <table className="w-full min-w-[700px] border-collapse text-left text-[14px]">
                      <thead>
                        <tr className="bg-[#f4f4f5] border-b border-[#e4e7ea] text-[#1a1a22] font-semibold">
                          <th className="py-3.5 px-4 w-[240px]">Cookie</th>
                          <th className="py-3.5 px-4 w-[180px]">Host</th>
                          <th className="py-3.5 px-4 w-[140px]">Duration</th>
                          <th className="py-3.5 px-4">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e4e7ea] text-[#525069]">
                        {group.cookies.map((c, cIdx) => (
                          <tr
                            key={cIdx}
                            className="hover:bg-[#fafafc] transition-colors"
                          >
                            <td className="py-3 px-4 font-mono font-medium text-[#131032] break-all">
                              {c.name}
                            </td>
                            <td className="py-3 px-4 text-[#1a1a22] whitespace-nowrap">
                              {c.host}
                            </td>
                            <td className="py-3 px-4 text-[#75738b] whitespace-nowrap">
                              {c.duration}
                            </td>
                            <td className="py-3 px-4 leading-[22px]">
                              {c.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
