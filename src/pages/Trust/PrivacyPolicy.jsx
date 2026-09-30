import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Privacy Policy section items for sticky table of contents
const privacySections = [
  { id: "who-we-are", title: "Who We Are" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes-to-policy", title: "Changes to this Privacy Policy" },
  { id: "to-whom-applies", title: "To Whom Does this Policy Apply" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "remarketing-tags", title: "Remarketing Tags" },
  { id: "payment-processing", title: "Payment Processing" },
  { id: "analytics", title: "Analytics" },
  { id: "videos", title: "Videos" },
  { id: "how-why-we-use", title: "How & Why We Use Personal Information" },
  { id: "disclosure-of-info", title: "Disclosure of Your Information" },
  { id: "data-security", title: "Data Security" },
  { id: "do-not-track", title: "“Do Not Track”" },
  { id: "retention-periods", title: "How Long Do We Keep Your Information?" },
  { id: "opting-out-marketing", title: "Opting-Out of Marketing" },
  { id: "notice-nevada", title: "Notice to Nevada Consumers" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "eea-uk-users", title: "Additional Information for Users in the EEA and U.K." },
  { id: "hipaa-notice", title: "About HIPAA Privacy Notice" },
  { id: "contact-us", title: "Contact Us" },
  { id: "representatives-eea-uk", title: "Representatives in the EEA and the U.K." },
];

/**
 * Recreated authentic Krisp Privacy Policy page.
 * Faithful replica of https://krisp.ai/privacy-policy/
 */
export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("who-we-are");

  useEffect(() => {
    document.title = "Privacy Policy | Silgate Replica";

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = privacySections.length - 1; i >= 0; i--) {
        const el = document.getElementById(privacySections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(privacySections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="w-full bg-white text-[#131032] font-sans antialiased">
      <section className="w-[calc(100%-48px)] max-w-[1280px] mx-auto pt-12 md:pt-16 pb-24">
        {/* Page Heading */}
        <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#131032] leading-[1.2] tracking-tight mb-8">
          Privacy Policy
        </h1>

        {/* Content Layout with Sticky Sidebar */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 relative">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block w-[360px] xl:w-[387px] flex-shrink-0 sticky top-[100px] bg-[#f2f3f4] rounded-[20px] p-5 shadow-sm">
            <div className="text-[13px] font-bold uppercase tracking-wider text-[#75738b] mb-3 px-3">
              Table of Contents
            </div>
            <ul className="overflow-y-auto max-h-[calc(78vh-60px)] space-y-1 pr-1 custom-scrollbar">
              {privacySections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`block text-[15px] font-semibold leading-[22px] px-3.5 py-2.5 rounded-[10px] transition-all ${
                      activeSection === sec.id
                        ? "bg-[#e4e7ea] text-[#131032] font-bold shadow-sm"
                        : "text-[#525069] hover:bg-[#e9ebed] hover:text-[#131032]"
                    }`}
                  >
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Legal Content */}
          <div className="w-full lg:max-w-[calc(100%-410px)] text-[#131032] font-normal leading-[28px] text-[16px]">
            <p className="text-[15px] text-[#75738b] italic mb-6">
              Last updated: September 28, 2026
            </p>

            <h2 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-8 pb-3 border-b border-[#e4e7ea]">
              PRIVACY POLICY FOR KRISP
            </h2>

            {/* Introductory Text */}
            <div className="space-y-4 mb-10 text-[#131032]">
              <p>
                Welcome to{" "}
                <Link to="/" className="text-[#614efa] hover:underline font-medium">
                  www.krisp.ai
                </Link>{" "}
                (“<strong>Site</strong>”), hosted by Krisp Technologies, Inc. (“<strong>Company</strong>”, “<strong>we</strong>”, “<strong>us</strong>” and/or “<strong>our</strong>”). Company provides AI meeting assistant and noise cancellation technologies to individuals and businesses (“<strong>Krisp</strong>”). In order to provide the Site and/or Krisp, we collect personal data from our Site visitors (“<strong>Site Visitors</strong>”) and our customers (“<strong>Customers</strong>”). We also collect the personal data of our Customers’ Authorized Users (as defined in the{" "}
                <Link to="/terms-of-use" className="text-[#614efa] hover:underline font-medium">
                  Krisp Terms of Use
                </Link>
                ) when they use Krisp, and we also collect certain information from third parties. All references to “you” and “your” in this Privacy Policy mean the Site Visitors, Customers, including the person accepting this Privacy Policy on behalf of an entity or organization, and Authorized Users, as the case may be.
              </p>
              <p>
                This Privacy Policy applies to personal information collected by Company when you use our Site and/or Krisp, or otherwise provide us with personal information. Please read it carefully to understand our policies and practices regarding your personal information and how we will treat it. If you do not agree with our Privacy Policy, please do not download, install, register with, access, or use the Site and/or Krisp. Please note that this Privacy Policy does not apply to Krisp Call Center AI product customers, and their End Users (as such terms are defined in our Privacy Policy for Call Center AI) and access to and use of Krisp and the Site by such parties is subject to our Privacy Policy for Call Center AI.
              </p>

              {/* EEA Callout */}
              <div className="bg-[#f7f7f8] border-l-4 border-[#614efa] p-4 rounded-r-lg mt-4">
                <p>
                  <strong>IF YOU ARE AN INDIVIDUAL LOCATED IN THE EEA</strong>: If you are located in the European Economic Area (“<strong>EEA</strong>”), this entire Privacy Policy applies to you. However, please see the section titled{" "}
                  <a
                    href="#eea-uk-users"
                    onClick={(e) => scrollToSection(e, "eea-uk-users")}
                    className="text-[#614efa] hover:underline font-medium"
                  >
                    Additional Information for Users in the EEA
                  </a>
                  , which will inform you in detail about our legal bases for processing and your rights regarding the processing of your personal data.
                </p>
              </div>

              {/* Nevada Callout */}
              <div className="bg-[#f7f7f8] border-l-4 border-[#614efa] p-4 rounded-r-lg mt-4">
                <p>
                  <strong>IF YOU ARE A RESIDENT OF NEVADA</strong>: If you are a resident of Nevada, this entire Privacy Policy applies to you. However, please see the section titled{" "}
                  <a
                    href="#notice-nevada"
                    onClick={(e) => scrollToSection(e, "notice-nevada")}
                    className="text-[#614efa] hover:underline font-medium"
                  >
                    Notice to Nevada Consumers
                  </a>
                  , which will also apply to you.
                </p>
              </div>
            </div>

            {/* 1. WHO WE ARE */}
            <div id="who-we-are" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">WHO WE ARE</h3>
              <p className="mb-4">
                Company is a Delaware corporation with the following corporate information:
              </p>
              <div className="bg-[#f7f7f8] p-4 rounded-xl border border-[#e7e7ea] mb-5">
                <p className="font-medium text-[#131032]">
                  Krisp Technologies, Inc.
                  <br />
                  2150 Shattuck Ave, Penthouse 1300, Berkeley, CA 94704, United States
                </p>
              </div>
              <p className="mb-3">
                For users in the EEA and the U.K., note that we may collect your personal data as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  A “data controller” when we determine the means and purpose of processing, such as when we process the personal data of our Site visitors and/or customers, or as
                </li>
                <li>
                  A “data processor” when we collect and process personal data of Authorized Users on behalf of our Customers who use Krisp.
                </li>
              </ul>
              <p>
                When we act as a ‘data processor’, our Customers are primarily responsible for making sure that they have properly informed Authorized Users of their policies and practices and your rights. However, Company handles and secures your personal information as set forth in this Privacy Policy (except as noted otherwise in this Privacy Policy).
              </p>
            </div>

            {/* 2. CHILDREN’S PRIVACY */}
            <div id="childrens-privacy" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">CHILDREN’S PRIVACY</h3>
              <p>
                Company does not knowingly collect information from children under the age of 16. If you are under the age of 16, please do not submit any personal data to us. We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce our Privacy Policy by instructing their children never to provide personal data without their permission. If you have reason to believe that a child under the age of 16 has provided personal data to Company through the Site or Krisp, please contact{" "}
                <a href="mailto:security@krisp.ai" className="text-[#614efa] hover:underline font-medium">
                  security@krisp.ai
                </a>{" "}
                and we will endeavor to delete that information from our databases.
              </p>
            </div>

            {/* 3. CHANGES TO THIS PRIVACY POLICY */}
            <div id="changes-to-policy" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">CHANGES TO THIS PRIVACY POLICY</h3>
              <p>
                This Privacy Policy was last updated on the date indicated above, but we suggest that you review it from time to time, as our Site and/or Krisp and our business may change. As a result, at times it may be necessary for the Company to make changes to this Privacy Policy. Company reserves the right to update or modify this Privacy Policy at any time and from time to time without prior notice. However, if an update materially impacts your rights or how we use your personal information, we will notify you either by email or other direct communication before such updates take effect. Your continued use of the Site and/or Krisp after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.
              </p>
            </div>

            {/* 4. TO WHOM DOES THIS POLICY APPLY */}
            <div id="to-whom-applies" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">TO WHOM DOES THIS POLICY APPLY</h3>
              <p className="mb-4">
                Note at the outset that this Privacy Policy does not cover our Customers’ websites, products or services. Each Customer is responsible for posting its own terms, conditions, and privacy policies, and ensuring compliance with all applicable laws and regulations. This Privacy Policy applies to:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Customers:</strong> as noted above, this includes any individual who registers or creates an account individually or on behalf of an entity or organization in order to use Krisp.
                </li>
                <li>
                  <strong>Site Visitors:</strong> visitors to our Site, including those who may also opt-in to receive commercial communications from Company.
                </li>
                <li>
                  <strong>Authorized Users:</strong> Company processes Authorized User data on behalf of its Customers. While our Customers are responsible, as data controllers, for how and why they collect and process their Authorized User personal information, this Privacy Policy also applies to any Authorized User personal information that we process, as a data processor, in order to provide Krisp to our Customers, except where specifically indicated.
                </li>
                <li>
                  <strong>Other Individuals:</strong> Company also collects certain professional information from third parties about individuals with whom we do not have a direct relationship or individuals who contact us to get more information about Krisp.
                </li>
              </ul>
            </div>

            {/* 5. INFORMATION WE COLLECT */}
            <div id="information-we-collect" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">INFORMATION WE COLLECT</h3>
              <p className="mb-4">
                What personal information we collect and process depends on how and why you use our Site and/or Krisp. Generally, we process personal information that we receive:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-semibold underline">Directly</span> from you when you provide it to us, such as in connection with our Site and/or Krisp.
                </li>
                <li>
                  <span className="font-semibold underline">Indirectly</span>, through automated technologies such as cookies, or from third parties.
                </li>
              </ul>

              {/* Crucial Legal Callout Boxes */}
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-[#fef2f2] border-l-4 border-[#fe6257] rounded-r-lg text-[15px] font-bold text-[#991b1b] uppercase leading-relaxed">
                  PLEASE NOTE AT THE OUTSET THAT COMPANY DOES NOT HAVE ACCESS TO OR STORE ANY AUDIOVISUAL DATA WHEN YOU USE NOISE CANCELLATION FEATURE ONLY. IN SUCH A CASE NO AUDIOVISUAL DATA LEAVES THE USERS’ DEVICES AND COMPANY DOES NOT STORE OR HAVE ACCESS TO THE CONTENT OF CUSTOMER AND AUTHORIZED USER CONVERSATIONS.
                </div>

                <div className="p-4 bg-[#eff6ff] border-l-4 border-[#3b82f6] rounded-r-lg text-[15px] font-bold text-[#1e3a8a] uppercase leading-relaxed">
                  BY USING KRISP AI MEETING ASSISTANT, WHICH ENABLES YOU TO TRANSCRIBE, RECORD AND/OR SUMMARIZE YOUR ONLINE MEETING SESSIONS, YOU ACKNOWLEDGE AND AGREE THAT (I) WE MAY STORE SUCH MEETING TRANSCRIPTS, RECORDINGS AND SUMMARIES ON OUR SERVERS. WE MAY FURTHER SHARE YOUR MEETING CONTENT WITH OUR THIRD PARTY SERVICE PROVIDERS IN ORDER TO PROVIDE YOU WITH AI-GENERATED MEETING SUMMARIES, WHICH MAY ALSO BE STORED BY US. THE LIST OF OUR CURRENT THIRD PARTY SERVICE PROVIDERS IS AVAILABLE{" "}
                  <a href="https://trust.krisp.ai/subprocessors" target="_blank" rel="noopener noreferrer" className="underline text-[#2563eb]">
                    HERE
                  </a>{" "}
                  AND SUCH THIRD PARTY’S TERMS ALSO APPLY TO YOUR USE OF THE NOTE TAKER FEATURE.
                </div>

                <div className="p-4 bg-[#f8fafc] border-l-4 border-[#64748b] rounded-r-lg text-[15px] font-bold text-[#334155] uppercase leading-relaxed">
                  WHEN NON-ENGLISH SPEECH IS DETECTED IN TRANSCRIBE ONLY MODE, KRISP MAY AUTOMATICALLY RECORD THE RELEVANT AUDIO CONTENT OF YOUR MEETING IN ORDER TO ENABLE MULTILINGUAL TRANSCRIPTION. FOR AUDIO RECORDINGS MADE WHEN NON-ENGLISH SPEECH IS DETECTED, WE RETAIN SUCH RECORDINGS ONLY FOR THE DURATION NECESSARY TO GENERATE THE TRANSCRIPT. ONCE THE TRANSCRIPT IS GENERATED, THE AUDIO RECORDINGS ARE INSTANTLY AND SECURELY DELETED FROM OUR SERVERS. THIS ENSURES WE PROCESS ONLY WHAT IS STRICTLY NECESSARY TO PERFORM OUR CONTRACTUAL OBLIGATIONS TO YOU. ALL AUDIO IS ENCRYPTED IN TRANSIT AND AT REST.
                </div>

                <div className="p-4 bg-[#f8fafc] border-l-4 border-[#64748b] rounded-r-lg text-[15px] font-bold text-[#334155] uppercase leading-relaxed">
                  WHEN THE KRISP RECORDING AND MEETING NOTES FEATURES ARE ON, WE STORE SUCH AUDIO AND/OR ANY VIDEO/SCREEN RECORDINGS AND MEETING NOTES ONLY IN CONNECTION WITH PROVIDING SERVICES TO THE CUSTOMER – WE DO NOT MONITOR, SELL OR USE SUCH CONTENT FOR ANY PURPOSE AND WE DO NOT CONTROL HOW RECORDINGS AND MEETING NOTES ARE PROCESSED. THE CUSTOMER, RATHER THAN COMPANY, CONTROLS HOW SUCH CONTENT IS PROCESSED. ANY QUESTIONS ABOUT THE PROCESSING OF SUCH CONTENT SHOULD BE ADDRESSED TO THE CUSTOMER DIRECTLY.
                </div>

                <div className="p-4 bg-[#eff6ff] border-l-4 border-[#3b82f6] rounded-r-lg text-[15px] font-bold text-[#1e3a8a] uppercase leading-relaxed">
                  WE HAVE{" "}
                  <Link to="/security" className="underline text-[#2563eb]">
                    ROBUST ACCESS CONTROLS
                  </Link>{" "}
                  TO PREVENT UNAUTHORIZED ACCESS TO RECORDINGS AND/OR MEETING NOTES STORED ON COMPANY SERVERS. UNLESS OTHERWISE PROVIDED HEREIN, WE STORE RECORDINGS AND/OR MEETING NOTES UNTIL YOU INSTRUCT US TO DELETE THE RECORDINGS, MEETING NOTES AND/OR YOUR ACCOUNT WITH COMPANY. YOU CAN CONTACT{" "}
                  <a href="mailto:support@krisp.ai" className="underline text-[#2563eb]">
                    SUPPORT@KRISP.AI
                  </a>{" "}
                  TO REQUEST RECORDINGS AND/OR MEETING NOTES DELETION.
                </div>
              </div>

              {/* Sub-heading: Information We Collect Directly From You */}
              <h4 className="text-[19px] font-bold text-[#131032] mb-3 mt-6">
                Information We Collect Directly From You
              </h4>
              <p className="mb-4">
                You can generally visit our Site without having to submit any personal information. If you request more information, or sign up for Krisp, we will collect personal information as follows.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="font-bold text-[#131032] italic mb-1">Contact Forms</h5>
                  <p>
                    If you contact us via the contact form on our Site, we will ask you to provide information (e.g. your name, email address, company name, title).
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-[#131032] italic mb-1">Account Information</h5>
                  <p>
                    When you register for a Customer account, we request your email address. For corporate Customers with multiple team members, we may also ask you to submit your name and company name, as well as team members who will have access to Krisp. This information is your “Account Information” for the purposes of this Privacy Policy. Account Information is required to identify you as a Customer and permit you to access your account(s).
                  </p>
                  <p className="mt-2 text-[15px] text-[#525069]">
                    Note that our corporate Customers are responsible for ensuring that they comply with applicable privacy laws and notice requirements with respect to any individual whose name and information is submitted in connection with the Account Information.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-[#131032] italic mb-1">Your Content</h5>
                  <p>
                    If you provide Your Input (as defined in our Terms of Use), we may collect personal data contained in Your Input. If we generate Your Content (as defined in our Terms of Use), we may also collect and store such information in accordance with this Privacy Policy, including any types of personal data contained therein.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-[#131032] italic mb-1">Customer Payment Information</h5>
                  <p>
                    You are not required to enter your credit card information unless and until you decide to continue with a paid subscription to Krisp. In order to process your payment Information, we use PCI-compliant third-party processors, as explained in the section on Payment Processing below. This information is processed by our payment service provider and we receive a confirmation of payment, which we then associate with your Account Information and any relevant transactions. If you purchase a subscription through the Krisp mobile application using Apple Pay (iOS) or Google Pay (Android) Apple or Google may process your payment in accordance with their respective terms and privacy policies. In case of corporate Customers, other payment methods (e.g wire transfer) may be availed to you.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-[#131032] italic mb-1">Optional Information</h5>
                  <p>
                    We may also ask you to submit personal information if you choose to use interactive features of the Site and/or Krisp, including participation in research studies, surveys, promotions, requesting customer support, or otherwise communicating with us. For example, if you participate in a research study or survey, we may record your participation and feedback. In accordance with the consent provided by your device or other third-party API, we may process any contact information that you choose to provide us access to when using the Site and/or Krisp. We may also ask you for information when you interact with us (such as when responding to notices and announcements from us), and when you report a problem with Krisp and/or the Site or otherwise correspond with us. If you choose to interact with our AI-powered support assistant, we may collect the content (including audio and text-based content) of your conversation, and any information you choose to share in such interaction to provide support to you, and, where a request cannot be resolved by the assistant, to hand the conversation to a member of our support team. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Records and copies of your correspondence (including email addresses, reported issues containing recordings of your noise/voice cancellation test results, recordings and transcripts of voice support interactions as described above, which can be stored and used by us in accordance with this Privacy Policy, the Terms of Use), if you contact us
                    </li>
                    <li>
                      Your responses to surveys that we might ask you to complete for research purposes.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sub-heading: Information We Collect Indirectly */}
              <h4 className="text-[19px] font-bold text-[#131032] mb-3 mt-8">
                Information We Collect Indirectly
              </h4>
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="font-bold text-[#131032] italic mb-1">Device and Usage Information</h5>
                  <p>
                    When you download, use or interact with the Site, even if you do not have an account, we, or authorized third parties engaged by us, may automatically collect information about your use of the Site via your device. This information is collected via cookies and similar technologies (“Device and Usage Information”) and consists of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <strong>Information About your Device:</strong> information about the devices and software you use to access the Site — primarily the internet browser or mobile device that you use, the website or source that linked or referred you to the Site, your IP address or device ID (or other persistent identifier that uniquely identifies your computer or mobile device on the Internet), the operating system of your computer or mobile device, device screen size, and other similar technical information.
                    </li>
                    <li>
                      <strong>Usage Information:</strong> information about your interactions with the Site, including access dates and times, hardware and software information, device event information, log data, crash data, cookie data, and search queries on the Site and/or Krisp. This information allows us to understand the screens that you view, how you’ve used the Site and/or Krisp (which may include administrative and support), and other actions on the Site. We, or authorized third parties, automatically collect log data when you access and use the Site, even if you have not created an account or logged in. We use this information to administer and improve the Site and/or Krisp, analyze trends, track users’ use of the Site, and for remarketing purposes.
                    </li>
                    <li>
                      <strong>Location Information:</strong> based on Device and Usage Information, we are also able to determine general location information, but we do not store IP addresses.
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-[#131032] italic mb-1">Information from Third Parties</h5>
                  <p>
                    In some instances, we process personal information from third parties. This consists of data from our partners, such as transactional data from providers of payment services, or information from third parties who assist us with fraud prevention. We also collect information from third parties about Other individuals with whom we do not have a direct relationship. This information consists of business or professional information and includes name and email address, along with information such as title and company name, and we use this information for our marketing purposes.
                  </p>
                  <p className="mt-2">
                    From time to time, we may combine information we collect as described above with personal information we obtain from third parties. For example, we may combine information entered through a Company sales submission with information that we receive from a third-party sales intelligence platform to enhance our ability to market Krisp to Customers or potential Customers.
                  </p>
                  <p className="mt-2">
                    We may receive information about you when you integrate third-party apps, or link a third-party service with Krisp. If you decide to activate an integration, the third-party may share with us some information about you that is required to ensure your experience is more seamless, such as your name, email address, or other content or information needed to facilitate the integration. For example, you may authorize Krisp to connect with a third-party calendaring service or to sync a contact list or address book so that your meetings and connections are available to you through Krisp. We may share such information with our third party service providers for the sole purpose of providing Krisp to you and only in accordance with the terms of this Privacy Policy. The information we receive when you link or integrate Krisp with a third-party service depends on the settings, permissions and privacy policy controlled by that third-party service. You should always check the privacy settings and notices in these third-party services to understand what data may be disclosed to us or shared with Krisp. Additionally, if you sign up or login to Krisp using a third party authentication provider supported by us, we may collect authentication information provided to us by such a provider to allow you to log in. Please note, that no information obtained through such third-party apps or services (e.g. Google Workspace APIs) is used to develop, improve, or train generalized AI and/or ML models. Additionally, when obtaining information from Google APIs, our use and transfer to any other app of information received from Google APIs will adhere to{" "}
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#614efa] hover:underline font-medium"
                    >
                      Google API Services User Data Policy
                    </a>
                    , including the Limited Use requirements.
                  </p>
                </div>
              </div>

              {/* Sub-heading: Information We Process on Behalf of Our Customers */}
              <h4 className="text-[19px] font-bold text-[#131032] mb-3 mt-8">
                Information We Process on Behalf of Our Customers
              </h4>
              <p>
                As noted above, we will process Account Information in order to provide Krisp to our Customers. This includes Authorized User information, in order to enable Authorized Users to access and use Krisp, and consists of name and/or email address.
              </p>
              <p className="mt-2">
                As explained above, we do not have access to or store any voice content, except as described herein.
              </p>
            </div>

            {/* 6. REMARKETING TAGS */}
            <div id="remarketing-tags" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">REMARKETING TAGS</h3>
              <p className="mb-3">
                This Site uses Google, Twitter, Linkedin & Facebook remarketing services or tags in order to advertise to previous visitors to our Site on third-party platforms such as those listed above. With the help of cookies or tags, these remarketing services allow us to advertise our Site to visitors who may have visited our Site. This could be in the form of an advertisement on the Google search results page, a site in the Google Display Network, or somewhere on Facebook, Linkedin or Twitter.
              </p>
              <p className="mb-3">
                Third-party vendors, including Google, Facebook, Linkedin and X (formerly known as Twitter), use cookies (or similar technologies) to serve ads based on someone’s past activity on the Site, and as such, your personal information may be collected and used by those third-party vendors, subject to their respective privacy policies. It is your responsibility to read through their respective policies.
              </p>
              <p className="mb-2">You can opt-out of remarketing by visiting the links below:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a
                    href="https://support.google.com/ads/answer/2662922"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#614efa] hover:underline font-medium"
                  >
                    Google
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ads/website_custom_audiences/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#614efa] hover:underline font-medium"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#614efa] hover:underline font-medium"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/help/linkedin/answer/62931/manage-advertising-preferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#614efa] hover:underline font-medium"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* 7. PAYMENT PROCESSING */}
            <div id="payment-processing" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">PAYMENT PROCESSING</h3>
              <p>
                We do not directly collect your payment information and we do not store your payment information. We use third-party, PCI-compliant, payment processors, which collect payment information on our behalf in order to complete transactions. While our administrators are able to view and track actual transactions via customer portals, we do not have access to, or process, your credit card information. We do not receive or store your full payment credentials. When you use Apple Pay or Google Pay as a payment method, your payment is processed by our third-party payment processor. In case of corporate Customers, if we availed other payment methods, we may request your bank information to process refunds, if any.
              </p>
            </div>

            {/* 8. ANALYTICS */}
            <div id="analytics" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">ANALYTICS</h3>
              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Google Analytics</h4>
              <p className="mb-3">
                The Site uses Google Analytics, an analytics service that drops cookies and/or similar technologies to collect and store Device and Usage Information. We use Google Analytics to calculate visitor, session and campaign data for the Site analytics reports.
              </p>
              <p className="mb-4">
                You can read Google’s privacy policy{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#614efa] hover:underline font-medium"
                >
                  here
                </a>
                . You can opt-out from being tracked by Google Analytics in a particular browser on a particular device by downloading and installing the Google Analytics Opt-out Browser Add-on for that browser, which is available{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#614efa] hover:underline font-medium"
                >
                  here
                </a>
                .
              </p>
              <h4 className="text-[19px] font-bold text-[#131032] mb-2 mt-6">Behavioral Analytics</h4>
              <p className="mb-3">
                We use third-party in-Site behavior analytics platforms (such as Hotjar), which are designed to give us an aggregated view of our visitors’ behavior while browsing the Site. By using heat maps (a graphical representation of data that uses a system of color-coding to represent different values) and similar technologies, these services provide us valuable insight about what is of interest to visitors on our Site. Hotjar is not designed to track individual users, however if you wish to opt-out, please click{" "}
                <a
                  href="https://www.hotjar.com/privacy/do-not-track/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#614efa] hover:underline font-medium"
                >
                  here
                </a>
                .
              </p>
              <p>
                Please see more on our use of analytics data{" "}
                <Link to="/security" className="text-[#614efa] hover:underline font-medium">
                  here
                </Link>
                .
              </p>
            </div>

            {/* 9. VIDEOS */}
            <div id="videos" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">VIDEOS</h3>
              <p>
                Our Site may contain videos or links to videos relating to Krisp. If you click on a link or view a video, we do not collect any information, however the third-party video platforms, such as YouTube, may collect some personal information as set forth in their privacy notices.
              </p>
            </div>

            {/* 10. HOW & WHY WE USE PERSONAL INFORMATION */}
            <div id="how-why-we-use" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">
                HOW &amp; WHY WE USE PERSONAL INFORMATION
              </h3>
              <p className="mb-3">
                We use your personal information for a number of different reasons, as further explained below.
              </p>
              <p className="mb-3">
                For users located in the EEA, and the U.K., we must have a valid legal basis in order to process your personal data when we are acting as a ‘data controller’. The main legal bases under the European Union’s General Data Protection Regulation (GDPR) that justify our collection and use of your personal information are:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>
                  <strong>Performance of a contract:</strong> when your personal information is required in order to enter into or perform our contract with you, such as when you engage us to provide Krisp.
                </li>
                <li>
                  <strong>Consent:</strong> when you have consented to our use of your personal information via a consent form (online or offline).
                </li>
                <li>
                  <strong>Legitimate interests:</strong> when we use your personal information to achieve a legitimate interest and our reasons for using it outweigh any prejudice to your data protection rights.
                </li>
                <li>
                  <strong>Legal obligation:</strong> when we must use your personal information to comply with our legal obligations.
                </li>
                <li>
                  <strong>Legal claims:</strong> when your personal information is necessary for us to defend, prosecute or make a claim.
                </li>
              </ul>
              <p className="mb-3">
                Below are the general purposes and corresponding legal bases (in brackets) for which we may use your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Providing you access to and use of the Site and Krisp, including creating accounts, accessing content, features and functionality [<em>depending on the context, performance of a contract, legitimate interests, or consent</em>]
                </li>
                <li>
                  Processing and completing transactions, including verifying payments, and sending you related information, including purchase confirmations and invoices and important notices [<em>depending on the context, performance of a contract or legitimate interests</em>]
                </li>
                <li>
                  Developing and improving the Site, Krisp and user experience, troubleshooting user issues, if authorized by any applicable settings, and conducting research studies, or surveys. [<em>legitimate interests or consent</em>]
                </li>
                <li>
                  Responding to your queries and requests, or otherwise communicating directly with you such as to give you notices about your account [<em>depending on the context, performance of a contract, legitimate interests, and in some cases, legal claims</em>]
                </li>
                <li>
                  Improving the content and general administration of the Site, including system maintenance and upgrades, enabling new features and enhancing both Site Visitor and Customer experience [<em>legitimate interests</em>]
                </li>
                <li>
                  Improving our proprietary AI models and providing more accurate services [<em>consent</em>]
                </li>
                <li>
                  Detecting fraud, illegal activities or security breaches [<em>legitimate interests</em>]
                </li>
                <li>
                  Ensuring compliance with applicable laws [<em>compliance with a legal obligation</em>]
                </li>
                <li>
                  Conducting statistical analyses and analytics by monitoring and analyzing trends, usage, and activities on the Site [<em>consent where required (e.g. third-party cookies), or legitimate interests</em>]
                </li>
                <li>
                  Customizing Krisp and the Site experience according to your individual interests, such as through storing information about your preferences and recognizing you when you use or access the Site or Krisp [<em>legitimate interests</em>]
                </li>
                <li>
                  Managing our relationship with you, including Customer service or feedback [<em>legitimate interests or performance of a contract</em>]
                </li>
                <li>
                  Send you related information, such as updates, security alerts, and support messages [<em>legitimate interests</em>]
                </li>
                <li>
                  Increasing the number of customers who use our Site and Krisp through marketing and advertising [<em>consent where required, or legitimate interests</em>]
                </li>
                <li>
                  Sending commercial communications, in line with your communication preferences, about products and services, features, newsletters, offers, promotions, and events [<em>consent and in some cases, depending on location, with existing customers, legitimate interests</em>]
                </li>
                <li>
                  Providing social features as part of the Site and Krisp [<em>legitimate interests</em>]
                </li>
                <li>
                  Recording and storing your meetings [<em>Consent</em>]
                </li>
                <li>
                  Automatically capturing non-English speech for the sole purpose of providing multilingual transcription of meetings [<em>performance of a contract, when necessary to fulfill the service you requested</em>]
                </li>
                <li>
                  Carrying out our obligations and enforcing our rights arising from any contracts entered into between you and us, including for billing and collection [<em>depending on the context, performance of a contract or legal claims</em>]
                </li>
                <li>
                  Providing information to regulatory bodies when legally required, and only as outlined below in this Privacy Policy [<em>legal obligation, legal claims, legitimate interests</em>]
                </li>
              </ul>
            </div>

            {/* 11. DISCLOSURE OF YOUR INFORMATION */}
            <div id="disclosure-of-info" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">
                DISCLOSURE OF YOUR INFORMATION
              </h3>
              <p className="mb-3">We only disclose your personal information as described below.</p>
              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Third-Party Service Providers</h4>
              <p className="mb-3">
                Company discloses personal information to our third-party agents, contractors, or service providers who are hired to perform services on our behalf. These companies do things to help us provide the Site and/or Krisp, and in some cases collect information directly, for example as explained in Payment Processing above. Below is an illustrative list of functions for which we may use third-party service providers:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mb-4">
                <li>Hosting and content delivery network services</li>
                <li>Analytics services</li>
                <li>Providing backend support for certain features (e.g. text summarizations)</li>
                <li>Marketing and social media partners</li>
                <li>Customer support services</li>
                <li>Payment processors</li>
                <li>Communication platforms</li>
                <li>Functionality and debugging services</li>
                <li>Professional service providers, such as auditors, lawyers, consultants, accountants and insurers</li>
              </ul>
              <p className="mb-5">
                For the complete list of our subprocessors that we use under this Privacy Policy and the Terms of Use, please visit our{" "}
                <a
                  href="https://trust.krisp.ai/subprocessors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#614efa] hover:underline font-medium"
                >
                  Trust Center
                </a>{" "}
                page.
              </p>

              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Business Transfers and Transactions</h4>
              <p className="mb-5">
                As we continue to grow, we may purchase websites, applications, subsidiaries, other businesses or business units. Alternatively, we may sell businesses or business units, merge with other entities and/or sell assets or stock or receive financing, in some cases as part of a reorganization or liquidation in bankruptcy. In order to evaluate or as part of these transactions, we may transfer your personal information to a successor entity upon a merger, consolidation or other corporate reorganization in which Company participates, to a purchaser or acquirer of all or a portion of Company’s assets, bankruptcy included, or to an investor.
              </p>

              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Customers</h4>
              <p className="mb-5">
                When we act on behalf of our Customers (as a data processor or service provider), we may provide Authorized Users’ personal information to our Customers in order to comply with their requests, Authorized Users’ requests and/or regulator requests, among others. Occasionally, we will provide our Customers with aggregated information that does not identify Authorized Users directly, in order to provide information about usage, demographics (such as general location) or other general information. If you subscribe to Krisp using your business email address and your employer has a Krisp account, we may add your Krisp account to your employer’s corporate Krisp workspace, if allowed by your employer’s Krisp account settings. Besides, If your employer does not yet have a corporate Krisp account, we also may provide your business email address to your employer on their request.
              </p>

              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Legal Obligations and Security</h4>
              <p>
                In addition, Company will preserve or disclose your personal information in limited circumstances (other than as set forth in this Privacy Policy), including: (i) with your consent; (ii) when we have a good faith belief it is required by law, such as pursuant to a subpoena, warrant or other judicial or administrative order (as further explained below); (iii) to protect the safety of any person and to protect the safety or security of our Site and/or Krisp or to prevent spam, abuse, or other malicious activity of actors with respect to the Site and/or Krisp; or (iv) to protect our rights or property or the rights or property of those who use the Site and/or Krisp. If we are required to disclose personal information by law, such as pursuant to a subpoena, warrant or other judicial or administrative order, our policy is to only respond to requests that are properly issued by law enforcement within the United States or via mutual legal assistance mechanism (such as a treaty) in accordance with applicable laws.
              </p>
            </div>

            {/* 12. DATA SECURITY */}
            <div id="data-security" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">DATA SECURITY</h3>
              <p className="mb-3">
                We respect and are committed to safeguarding your privacy and have undertaken and put in place reasonable security measures.
              </p>
              <p className="mb-3">
                To learn about our Security measures, please visit our{" "}
                <Link to="/security" className="text-[#614efa] hover:underline font-medium">
                  Security for AI Meeting Assistant
                </Link>{" "}
                page.
              </p>
              <p>
                In addition to these measures, we ensure full compliance with the Payment Card Industry Data Security Standard (PCI-DSS) when our services involve the processing or storage of payment cardholder data. Our PCI-DSS compliance has been independently validated by a Qualified Security Assessor, and we maintain an Attestation of Compliance as evidence of our adherence to these rigorous industry standards. For any questions or to request more information about our PCI-DSS compliance, please contact us at{" "}
                <a href="mailto:security@krisp.ai" className="text-[#614efa] hover:underline font-medium">
                  security@krisp.ai
                </a>
                .
              </p>
            </div>

            {/* 13. “DO NOT TRACK” */}
            <div id="do-not-track" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">“DO NOT TRACK”</h3>
              <p>
                Krisp does not respond to Do Not Track (“DNT”) browser signals. For more information on DNT settings generally, please visit{" "}
                <a
                  href="https://allaboutdnt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#614efa] hover:underline font-medium"
                >
                  https://allaboutdnt.com
                </a>
                .
              </p>
            </div>

            {/* 14. HOW LONG DO WE KEEP YOUR PERSONAL INFORMATION? */}
            <div id="retention-periods" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">
                HOW LONG DO WE KEEP YOUR PERSONAL INFORMATION?
              </h3>
              <h4 className="text-[19px] font-bold text-[#131032] mb-2">General Retention Periods</h4>
              <p className="mb-3">We use the following criteria to determine our retention periods:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The amount, nature and sensitivity of your information.</li>
                <li>The reasons for which we collect and process the personal data.</li>
                <li>The length of time we have an ongoing relationship with you and provide you with access to our Site and/or Krisp.</li>
                <li>Applicable legal requirements.</li>
              </ul>
              <p className="mb-4">
                We retain personal information for as long as needed to provide Krisp. For Customers who do not purchase a subscription after the Trial Period (as defined in our Terms of Use), we retain personal information only for the Post-Trial Access Period (as defined in the Terms of Use) solely to allow you to access and export your data. Note, however, that with respect to our Customers with active accounts, we may retain certain essential account information, but otherwise regularly delete other information that is less essential to the provision of Krisp in order to minimize our storage of data. We retain content (including audio and a text-based content) that you choose to share with us in connection with your use of interactive features of the Site and/or Krisp as long as needed to provide support to you, and in any event no longer than six (6) months from the date your request is closed. We also will retain personal information that we’ve collected from you, or, where applicable, content (including audio and text-based content) you share with us, where we have an ongoing legitimate business need to do so (for example, to comply with applicable legal, tax or accounting requirements). Additionally, we cannot delete information, or, where applicable, content (including audio and text-based content) you share with us, when it is needed for the establishment, exercise or defense of legal claims (also known as a “litigation hold”). In this case, the information must be retained as long as needed for exercising respective potential legal claims. When we no longer have an ongoing legitimate business need to process your personal information, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), we will securely store your personal information and isolate it from any further processing until deletion is possible. For any questions about data retention, please contact{" "}
                <a href="mailto:security@krisp.ai" className="text-[#614efa] hover:underline font-medium">
                  security@krisp.ai
                </a>
                .
              </p>
              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Anonymization</h4>
              <p>
                In some instances, we may choose to anonymize your personal data instead of deleting it, for statistical use, for instance. When we choose to anonymize, we make sure that there is no way that the personal data can be linked back to you or any specific user.
              </p>
            </div>

            {/* 15. OPTING-OUT OF MARKETING */}
            <div id="opting-out-marketing" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">OPTING-OUT OF MARKETING</h3>
              <p>
                You may opt-out at any time of marketing that we may send you by clicking on the unsubscribe link contained in each email, or you may contact us directly at{" "}
                <a href="mailto:support@krisp.ai" className="text-[#614efa] hover:underline font-medium">
                  support@krisp.ai
                </a>
                .
              </p>
            </div>

            {/* 16. NOTICE TO NEVADA CONSUMERS */}
            <div id="notice-nevada" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">NOTICE TO NEVADA CONSUMERS</h3>
              <p>
                We do not sell your personal information within the scope of, and according to the defined meaning of, a “sale” under NRS 603A.
              </p>
            </div>

            {/* 17. INTERNATIONAL DATA TRANSFERS */}
            <div id="international-transfers" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">INTERNATIONAL DATA TRANSFERS</h3>
              <p className="mb-3">
                Company is a United States corporation, which primarily processes and stores information in the United States. To facilitate our global operations, we may process and store personal information from around the world, including from other countries and in other countries in which Company, our group affiliates, or our subprocessors (as identified in our{" "}
                <a
                  href="https://trust.krisp.ai/subprocessors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#614efa] hover:underline font-medium"
                >
                  Trust Center
                </a>{" "}
                webpage) have operations, in order to provide the Site and/or Krisp.
              </p>
              <div className="bg-[#f7f7f8] border-l-4 border-[#614efa] p-4 rounded-r-lg mb-4 font-bold text-[#131032]">
                If you are accessing or using our Site and/or Krisp or otherwise providing personal information to us, you acknowledge and agree that your personal information may be transferred or stored in the United States, where we are established, as well as other jurisdictions in which we, our group affiliates or our subprocessors operate.
              </div>
              <p className="mb-3">
                Where personal data of users in the EEA, Switzerland, or the UK is being transferred to a recipient located in a country outside the EEA, Switzerland, or the UK which has not been recognized as having an adequate level of data protection, we take appropriate safeguards to ensure that your personal information will remain protected in accordance with this Privacy Policy and applicable laws. These safeguards include implementing the Module 2 of European Commission’s Standard Contractual Clauses as issued on 4 June 2021 under Article 46(2) GDPR for transfers originating in the EEA, Switzerland (with amendments required under the applicable Swiss law) and the UK Addendum permitted under Article 46(2) of the UK GDPR for the transfer of data originating in the UK. Please contact us if you have any questions or concerns related to international data transfers.
              </p>
              <p>
                If you are a Customer, you are responsible for informing your Authorized Users of how and where their personal information will be processed at the time of collection. Because different countries may have different data protection laws than the United States we take steps to ensure adequate safeguards are in place to protect your data as explained in this Privacy Policy. We enter into data processing agreements with our Customers on request.
              </p>
            </div>

            {/* 18. ADDITIONAL INFORMATION FOR USERS IN THE EEA AND THE U.K. */}
            <div id="eea-uk-users" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">
                ADDITIONAL INFORMATION FOR USERS IN THE EEA AND THE U.K.
              </h3>
              <h4 className="text-[19px] font-bold text-[#131032] mb-3">Rights and Choices</h4>
              <p className="mb-3">
                If the GDPR applies to you because you are in the EEA or the U.K., you have certain rights in relation to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>
                  <strong>The right to be informed:</strong> our obligation to inform you that we process your personal data (and that’s what we’re doing in this Privacy Policy)
                </li>
                <li>
                  <strong>The right of access:</strong> your right to request a copy of the personal data we hold about you (also known as a ‘data subject access request’)
                </li>
                <li>
                  <strong>The right of rectification:</strong> your right to request that we correct personal data about you if it is incomplete or inaccurate (though we generally recommend first making any changes in your Account Settings)
                </li>
                <li>
                  <strong>The right to erasure (also known as the ‘right to be forgotten’):</strong> under certain circumstances, you may ask us to delete the personal data we have about you (unless it remains necessary for us to continue processing your personal data for a legitimate business need or to comply with a legal obligation as permitted under the GDPR, in which case we will inform you)
                </li>
                <li>
                  <strong>The right to restrict processing:</strong> your right, under certain circumstances, to ask us to suspend our processing of your personal data
                </li>
                <li>
                  <strong>The right to data portability:</strong> your right to ask us for a copy of your personal data in a common format (for example, a .csv file)
                </li>
                <li>
                  <strong>The right to object:</strong> your right to object to us processing your personal data (for example, if you object to us processing your data for direct marketing)
                </li>
                <li>
                  <strong>Rights in relation to automated decision-making and profiling:</strong> our obligation to be transparent about any profiling we do, or any automated decision-making. These rights are subject to certain rules around when you can exercise them.
                </li>
              </ul>
              <p className="mb-4">
                How you may exercise these rights depends on how you use the Site and/or Krisp, as explained below. For Authorized Users in the EEA or the U.K., please read below.
              </p>
              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Customers, Site Visitors in the EEA or the U.K.</h4>
              <p className="mb-3">
                If you are located in the EEA or the U.K. and you are a Customer or Site Visitor, and wish to exercise any of the rights set out above, you may contact us at{" "}
                <a href="mailto:support@krisp.ai" className="text-[#614efa] hover:underline font-medium">
                  support@krisp.ai
                </a>{" "}
                using the term “DSR” as your email subject line. You will not have to pay a fee to access your personal data (or to exercise any of the other rights) unless your request is clearly unfounded, repetitive or excessive. Alternatively, we may refuse to comply with your request under those circumstances. If we cannot reasonably verify your identity, we will not be able to comply with your request(s). We may need to request specific information from you to help us confirm your identity. This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. Note that this is especially true when you engage a third party to assist you in exercising your rights. We will respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated as required by law. In addition, we will always balance your rights against those of other data subjects in connection with any requests, and in some cases this may require us to redact our responses or deny a request.
              </p>
              <p className="mb-3">
                If you no longer wish to receive our marketing/promotional information, we remind you that you may withdraw your consent to direct marketing at any time directly from the unsubscribe link included in each electronic marketing message we send to you. If you do so, we will promptly update our databases, and will take all reasonable steps to meet your request at the earliest possible opportunity, but we may continue to contact you to the extent necessary for the purposes of providing Krisp.
              </p>
              <p className="mb-5">
                Finally, you have the right to make a complaint at any time to the supervisory authority for data protection issues in your country of residence. We would, however, appreciate the chance to address your concerns before you approach the supervisory authority, so please contact us directly first.
              </p>

              <h4 className="text-[19px] font-bold text-[#131032] mb-2">Authorized Users in the EEA or the U.K.</h4>
              <p>
                Company has no direct relationship with Authorized Users. Our Customers are solely responsible for ensuring compliance with all applicable laws and regulations with respect to their Authorized Users, and this includes handling all data subject requests. We rely on our Customers to comply with the underlying legal requirements and respond directly to Authorized Users when Authorized Users wish to exercise the rights set forth above. However, if an Authorized User sends a request to Company to access, correct, update, or delete his/her information, we will direct that Authorized User to contact the Customer’s website(s) with which he/she interacted directly, and cooperate with our Customers as required by applicable law in order to ensure that our Customers satisfy their Authorized Users’ requests.
              </p>
            </div>

            {/* 19. ABOUT HIPAA PRIVACY NOTICE */}
            <div id="hipaa-notice" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">ABOUT HIPAA PRIVACY NOTICE</h3>
              <p>
                If you use Krisp to record or transcribe conversations that include Protected Health Information (PHI), please note that such use may be subject to additional privacy rights and obligations under the Health Insurance Portability and Accountability Act (HIPAA). For details on how Krisp handles health information in accordance with HIPAA, please see our{" "}
                <a
                  href="https://krisp.ai/privacy-policy/hipaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#614efa] hover:underline font-medium"
                >
                  HIPAA Privacy Notice
                </a>
                .
              </p>
            </div>

            {/* 20. CONTACT US */}
            <div id="contact-us" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">CONTACT US</h3>
              <p className="mb-4">
                If you have questions about data protection, or if you have any requests for resolving issues with your personal data, we encourage you to first contact us so we can reply to you more quickly.
              </p>
              <div className="bg-[#f7f7f8] p-5 rounded-xl border border-[#e7e7ea] space-y-2">
                <p className="font-semibold text-[#131032]">Krisp Technologies, Inc.</p>
                <p className="text-[#525069]">
                  2342 Shattuck Ave, #367, Berkeley, CA 94704, United States
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:security@krisp.ai" className="text-[#614efa] hover:underline font-medium">
                    security@krisp.ai
                  </a>
                </p>
              </div>
            </div>

            {/* 21. REPRESENTATIVES IN THE EEA AND THE UNITED KINGDOM */}
            <div id="representatives-eea-uk" className="mb-12 pt-6">
              <h3 className="text-[22px] font-bold text-[#131032] mb-4">
                Representatives in the EEA and the United Kingdom
              </h3>
              <p className="mb-5">
                Krisp is not established in the European Economic Area or the United Kingdom. In accordance with Article 27 of the EU General Data Protection Regulation (GDPR) and Article 27 of the UK GDPR, Krisp has designated the following representatives, who may be contacted on all matters relating to the processing of personal data in order to ensure compliance with the GDPR and the UK GDPR:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-[#f7f7f8] rounded-xl border border-[#e7e7ea]">
                  <h4 className="font-bold text-[#131032] mb-1">Representative in the European Union</h4>
                  <p className="text-[#525069] mb-1">
                    Europe Services, SE — Na Čečeličce 425/4, Smíchov, 150 00 Praha 5, Czech Republic
                  </p>
                  <p>
                    <a href="mailto:info@gdprrepresentative.com" className="text-[#614efa] hover:underline font-medium">
                      info@gdprrepresentative.com
                    </a>{" "}
                    — designation R27-06E0-F7FF
                  </p>
                </div>

                <div className="p-4 bg-[#f7f7f8] rounded-xl border border-[#e7e7ea]">
                  <h4 className="font-bold text-[#131032] mb-1">Representative in the United Kingdom</h4>
                  <p className="text-[#525069] mb-1">
                    REP27 LTD — Unit 82a James Carter Road, Mildenhall, IP28 7DE, United Kingdom
                  </p>
                  <p>
                    <a href="mailto:info@gdprrepresentative.com" className="text-[#614efa] hover:underline font-medium">
                      info@gdprrepresentative.com
                    </a>{" "}
                    — designation UK27-06E0-F7FF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
