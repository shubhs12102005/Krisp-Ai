import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Terms of Use section items for sticky table of contents
const termsSections = [
  { id: "acceptance", title: "Acceptance of the Terms of Use" },
  { id: "changes", title: "Changes to the Terms of Use" },
  { id: "license-grant", title: "License Grant" },
  { id: "license-restrictions", title: "License Restrictions" },
  { id: "reservation-of-rights", title: "Reservation of Rights" },
  { id: "collection-of-info", title: "Collection and Use of Your Information" },
  { id: "updates", title: "Updates" },
  { id: "integrations", title: "Integrating with Third Parties" },
  { id: "account-security", title: "Accessing Krisp and Account Security" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "trademarks", title: "Trademarks" },
  { id: "your-content", title: "Your Content" },
  { id: "prohibited-uses", title: "Your Obligations and Prohibited Uses" },
  { id: "reliance", title: "Reliance on Information Posted" },
  { id: "third-party-materials", title: "Third-Party Materials, Links and Models" },
  { id: "purchases-payments", title: "Purchases and Payments" },
  { id: "term-termination", title: "Term; Termination and Refund" },
  { id: "disclaimers", title: "Representations, Warranties and Disclaimers" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "beta-services", title: "Beta Services" },
  { id: "publicity", title: "Publicity" },
  { id: "export-regulation", title: "Export Regulation" },
  { id: "government-rights", title: "U.S. Government Rights" },
  { id: "governing-law", title: "Governing Law" },
  { id: "arbitration", title: "Binding Arbitration / Class Action Waiver" },
  { id: "waiver", title: "Waiver and Severability" },
  { id: "entire-agreement", title: "Entire Agreement" },
  { id: "comments-concerns", title: "Your Comments and Concerns" },
];

/**
 * Recreated authentic Krisp Terms of Use page.
 * Faithful replica of https://krisp.ai/terms-of-use/
 */
export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    document.title = "Terms of Use | Silgate Replica";

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = termsSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(termsSections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
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
          Terms of use
        </h1>

        {/* Content Layout with Sticky Sidebar */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 relative">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block w-[360px] xl:w-[387px] flex-shrink-0 sticky top-[100px] bg-[#f2f3f4] rounded-[20px] p-5 shadow-sm">
            <div className="text-[13px] font-bold uppercase tracking-wider text-[#75738b] mb-3 px-3">
              Table of Contents
            </div>
            <ul className="overflow-y-auto max-h-[calc(78vh-60px)] space-y-1 pr-1 custom-scrollbar">
              {termsSections.map((sec) => (
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
              Last updated: March 4, 2026
            </p>

            <h2 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-8 pb-3 border-b border-[#e4e7ea]">
              TERMS OF USE FOR KRISP
            </h2>

            {/* Section 1 */}
            <div id="acceptance" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Acceptance of the Terms of Use
              </h3>
              <p className="mb-4">
                These terms of use are entered into by and between you (“<strong>Customer</strong>”) and Krisp Technologies, Inc., a Delaware corporation (“<strong>Company</strong>”, “<strong>we</strong>”, “<strong>us</strong>” or “<strong>our</strong>”). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, these “<strong>Terms of Use</strong>” or “<strong>Terms</strong>”), govern your access to and use of (a) the Krisp AI meeting assistant product and related services specified in applicable order forms and as made available to you in your capacity of individual or corporate individual Customers or Authorized Users (as defined below) from time to time (“<strong>Krisp</strong>”); (b) the Krisp website, www.krisp.ai, all subdomains thereof, and social media accounts and pages we operate (collectively, the “<strong>Site</strong>”), whether you are a guest or an Authorized User; and (c) any other web resources controlled by us. References herein to “Krisp” shall also mean and include the Site, as the context requires. If the individual accepting these Terms is accepting on behalf of a company or other legal entity, such individual represents that they have the authority to bind such entity and its affiliates to these Terms, in which case the term “Customer” shall refer to such entity and its affiliates. If the individual accepting this agreement does not have such authority, or does not agree with these Terms, such individual must not accept these Terms and may not use Krisp or access the Site. All references to “you” and “your” in these Terms mean the person accepting these Terms as an individual. References herein to “you” and “your” shall also mean the entity or organization for which the representative is acting and its internal users who access or use Krisp under your subscription and with whom you have an employment, contractor, or agency relationship or otherwise provided access to your subscription (collectively, “<strong>Authorized Users</strong>”). Certain provisions of these Terms may apply only to specific service tiers — for example, some provisions apply only to Krisp’s paid services that are not on Business tier (“<strong>Pro Services</strong>”), while others may apply only to Business-tier customers. These tier-specific provisions are clearly identified throughout the Terms.
              </p>
              <p className="mb-4">
                Please note that these Terms do not govern the use of the Krisp Call Center AI product. If you are a customer of the Krisp Call Center AI product, the description of which is available{" "}
                <Link to="/call-center-ai" className="text-[#614efa] underline font-semibold hover:text-[#4a3bbe]">
                  here
                </Link>
                , then your access to and use of Krisp and/or the Site is subject to our Master Subscription Agreement or other written contract as may be separately agreed to and signed by you and us (“<strong>MSA</strong>”).
              </p>
              <div className="bg-[#f9fafb] border-l-4 border-[#614efa] p-5 my-6 rounded-r-lg text-[15px] leading-[26px]">
                <p className="font-semibold uppercase mb-3 text-[#131032]">
                  PLEASE READ THE TERMS OF USE CAREFULLY BEFORE YOU START TO DOWNLOAD, INSTALL, REGISTER WITH, USE, OR ACCESS KRISP.
                </p>
                <p className="mb-3">
                  BY DOWNLOADING, INSTALLING, REGISTERING WITH, USING, OR ACCESSING KRISP, YOU (A) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THESE TERMS OF USE AND OUR{" "}
                  <Link to="/privacy-policy" className="text-[#614efa] underline font-bold">
                    PRIVACY POLICY FOR AI MEETING ASSISTANT
                  </Link>
                  , INCORPORATED HEREIN BY REFERENCE; (B) REPRESENT THAT YOU ARE OF LEGAL AGE AND CAPACITY TO ENTER INTO A BINDING AGREEMENT; AND (C) ACCEPT THESE TERMS AND AGREE THAT YOU ARE LEGALLY BOUND BY IT. IF YOUR USE OF KRISP INVOLVES PROCESSING OF END USER PERSONAL DATA BY COMPANY ON YOUR BEHALF, COMPANY WILL PROCESS SUCH PERSONAL DATA SUBJECT TO ITS DATA PROCESSING ADDENDUM. IF YOU DO NOT AGREE TO THESE TERMS OF USE OR THE PRIVACY POLICY, OR THE DATA PROCESSING ADDENDUM (WHERE APPLICABLE) YOU MUST NOT ACCESS OR USE KRISP OR THE SITE. REFERENCES HEREIN TO “<strong>USE</strong>” OR “<strong>ACCESS</strong>” SHALL INCLUDE DOWNLOADING, INSTALLING, REGISTERING WITH, USING, AND/OR ACCESSING KRISP, INCLUDING USING THE CONTENT, FEATURES, FUNCTIONALITY, AND/OR SERVICES OF KRISP.
                </p>
                <p className="mb-3 font-semibold text-[#131032]">
                  IMPORTANT: PLEASE REVIEW THE MUTUAL ARBITRATION AGREEMENT SET FORTH BELOW CAREFULLY, AS IT WILL REQUIRE YOU TO RESOLVE DISPUTES WITH KRISP ON AN INDIVIDUAL BASIS (WAIVING YOUR RIGHT TO A CLASS ACTION) THROUGH FINAL AND BINDING ARBITRATION. BY ENTERING THIS AGREEMENT, YOU EXPRESSLY ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND ALL OF THE TERMS OF THIS MUTUAL ARBITRATION AGREEMENT AND HAVE TAKEN THE TIME TO CONSIDER THE CONSEQUENCES OF THIS IMPORTANT DECISION.
                </p>
                <p className="font-semibold text-[#131032]">
                  THESE TERMS OF USE ALSO CONTAIN RELEASES, LIMITATIONS OF LIABILITY, AND PROVISIONS ON INDEMNITY AND ASSUMPTION OF RISK, ALL OF WHICH MAY LIMIT YOUR LEGAL RIGHTS AND REMEDIES. PLEASE REVIEW THEM CAREFULLY.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="changes" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Changes to the Terms of Use
              </h3>
              <p className="mb-4">
                We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them. However, any changes to the dispute resolution provisions set forth in Governing Law and Jurisdiction and Binding Arbitration/Class Action Waiver will not apply to any disputes for which the parties have actual notice prior to the date the change is posted on our Site at www.krisp.ai.
              </p>
              <p>
                Your continued use of Krisp following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you. We will make commercially reasonable efforts to notify Customers via email of any material or significant changes that may affect your access or use of Krisp and/or the Site.
              </p>
            </div>

            {/* Section 3 */}
            <div id="license-grant" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                License Grant
              </h3>
              <p className="mb-4">
                Subject to these Terms for the applicable term of your subscription or Trial Period (as defined below), the Company grants you a limited, non-exclusive, non-sublicensable, and non-transferable license to: (a) download, install, register with, use, and access Krisp and/or the Site for your personal use or internal business use on a computer owned or otherwise controlled by you (“Device”) strictly in accordance with these Terms and Krisp’s documentation; and (b) access, download, and use on such Device the services made available in or otherwise accessible through Krisp, strictly in accordance with these Terms. Krisp is delivered electronically and you may extend said license to your Authorized Users, and you are authorized to provide single-user copies of Krisp to each Authorized User in accordance with the Terms. You represent and warrant that your Authorized Users acknowledge and accept these Terms, and you are responsible for the activities of your Authorized Users and their compliance with these Terms. Krisp assumes no responsibility or liability for violations of these Terms by your Authorized Users.
              </p>
              <p>
                If you are a direct competitor, and you access or use Krisp for purposes of competitive benchmarking, analysis, or intelligence gathering, you waive as against Company, its subsidiaries, and its affiliated companies (including prospectively) any competitive use, access, and benchmarking test restrictions in the terms governing your software to the extent your terms of use are, or purport to be, more restrictive than our terms. If this section applies and you do not waive any such purported restrictions in the terms governing your software, you are not allowed to access or use Krisp, and will not do so.
              </p>
            </div>

            {/* Section 4 */}
            <div id="license-restrictions" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                License Restrictions
              </h3>
              <p className="mb-4">
                You shall not: (a) copy Krisp, except as expressly permitted by this license; (b) modify, translate, adapt, or otherwise create derivative works or improvements, whether or not patentable, of Krisp; (c) reverse engineer, disassemble, decompile, decode, or otherwise attempt to derive or gain access to the source code of Krisp or any part thereof; (d) remove, delete, alter, or obscure any trademarks or any copyright, trademark, patent, or other intellectual property or proprietary rights notices from Krisp, including any copy thereof; (e) copy, rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, or otherwise make available Krisp, or any content, features, or functionality of Krisp, to any third party for any reason, including by making Krisp available on a network where it is capable of being accessed by more than one device at any time, except as expressly authorized hereunder; (f) remove, disable, circumvent, or otherwise create or implement any workaround to any copy protection, rights management, or security features in or protecting Krisp; (g) bypass any measures Company may use to prevent or restrict access to Krisp (or other accounts, computer systems or networks connected to Krisp); or (h) use Krisp in, or in association with, the design, construction, maintenance, or operation of any hazardous environments or systems, including any power generation systems; aircraft navigation or communication systems, air traffic control systems, or any other transport management systems; safety-critical applications, including medical or life-support systems, vehicle operation applications or any police, fire, or other safety response systems; and military or aerospace applications, weapons systems, or environments.
              </p>
              <p>
                You are responsible for all of your activity in connection with Krisp including but not limited to uploading Your Content (as defined below) to Krisp. You (i) shall use Krisp in compliance with all applicable local, state, national and foreign laws, treaties and regulations in connection with your use of Krisp (including those related to data privacy, international communications, export laws and the transmission of technical or personal data laws which, for clarity, includes laws governing the monitoring or recording of conversations (“Recording Laws”)), (ii) shall not use the input, upload, transmit or otherwise provide any information or materials, including Your Input, that contain, transmit, or activate any harmful code, and (c) shall not use Krisp in a manner that violates any third party intellectual property, contractual or other proprietary rights.
              </p>
            </div>

            {/* Section 5 */}
            <div id="reservation-of-rights" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Reservation of Rights
              </h3>
              <p>
                You acknowledge and agree that Krisp is provided under license, and not sold, to you. You do not acquire any ownership interest in Krisp under these Terms, or any other rights thereto other than to use Krisp in accordance with the license granted, and subject to all terms, conditions, and restrictions, under these Terms. Company and its licensors and service providers reserve and shall retain their entire right, title, and interest in and to Krisp, including all copyrights, trademarks, and other intellectual property rights therein or relating thereto, except as expressly granted to you in these Terms.
              </p>
            </div>

            {/* Section 6 */}
            <div id="collection-of-info" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Collection and Use of Your Information
              </h3>
              <p className="mb-4">
                You acknowledge that when you download, install, register with, use, or access Krisp, we may use automatic means (including, for example, cookies and web beacons) to collect information about your Device and about your use of Krisp. You also may be required to provide certain information about yourself as a condition to downloading, installing, registering with, using or accessing Krisp or certain of its content, features, or functionality, and Krisp may provide you with opportunities to share information about yourself with others. You acknowledge and accept that Krisp has certain content, features, functionality, or services that are based on artificial intelligence, digital signal processing, and machine learning systems, which may also be collecting information on your use of and access to Krisp.
              </p>
              <p>
                All information we collect through or in connection with Krisp and the Site is subject to our{" "}
                <Link to="/privacy-policy" className="text-[#614efa] underline font-semibold hover:text-[#4a3bbe]">
                  Privacy Policy
                </Link>
                , incorporated herein by reference. By downloading, installing, registering with, using, accessing and providing information to or through Krisp and the Site, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy. Company shall use commercially reasonable efforts to maintain the security and integrity of Krisp and Your Content. Company is not responsible to you for unauthorized access to Your Content or the unauthorized use of Krisp unless such access is due to Company’s gross negligence or willful misconduct.
              </p>
            </div>

            {/* Section 7 */}
            <div id="updates" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Updates
              </h3>
              <p className="mb-4">
                We may from time to time in our sole discretion develop and provide application updates for Krisp or otherwise make changes to all or parts of Krisp and/or the Site, which may include upgrades, bug fixes, patches, other error corrections, and/or new features (collectively, including related documentation, “<strong>Updates</strong>”). Updates may also modify or delete in their entirety certain content, features, and functionality. You agree that we have no obligation to provide any Updates or to continue to provide or enable any particular content, features, or functionality. You also agree that we don't guarantee that we will support the version of the system for which you licensed Krisp. Updates may not be compatible with software or services provided by third parties. Based on your Device settings, when your Device is connected to the internet either: (a) Krisp will automatically download and install all available Updates; or (b) you may receive notice of or be prompted to download and install available Updates.
              </p>
              <p className="mb-4">
                We may or may not backup any or all content, features, functionalities, services, or aspects of Krisp, including your settings; however, we take no responsibility for any such material that is lost, damaged, or deleted, and you hereby acknowledge and agree that we are in no way liable for any damage that this action or omission may cause you.
              </p>
              <p>
                From time to time, we may decide to discontinue support for certain older versions of Krisp. We will provide you with reasonable notice before such discontinuation takes effect, and we encourage you to update to the latest version of Krisp.
              </p>
            </div>

            {/* Section 8 */}
            <div id="integrations" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Integrating with Third Parties
              </h3>
              <p className="mb-4">
                Use and access of Krisp may involve use and access of third party platforms, software, applications, or other tools (“<strong>Third Party Integrations</strong>”). In order to provide you with Krisp, we may integrate with such third parties, including transmitting and receiving information (i) as authorized or instructed by you, and/or (ii) in accordance with these Terms, including our Privacy Policy. Customer acknowledges and agrees that (i) Krisp may operate on, with or using Third Party Integrations, (ii) the availability and operation of Krisp or certain portions thereof may be dependent on Company’s ability to access such Third Party Integrations, and (iii) where applicable, Customer’s failure to provide adequate access or any retraction of permissions relating to such Third Party Integrations may result in a suspension or interruption of Krisp.
              </p>
              <p>
                Customer hereby represents and warrants that it has all rights, licenses, permissions and consents necessary to connect, use and access any Third Party Integrations that it integrates with Krisp, and Customer shall indemnify, defend and hold harmless Company for all claims, damages and liabilities arising out of Customer’s use of any such Third Party Integrations in connection with or through Krisp.
              </p>
            </div>

            {/* Section 9 */}
            <div id="account-security" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Accessing Krisp and Account Security
              </h3>
              <p className="mb-4">
                To access Krisp and/or some of its content, features, functionality, and/or services, you may be required to register a user account (“<strong>Account</strong>”), where you may be required to share certain personal information. It is a condition of your use of Krisp that all the information you provide is correct, current, and complete. You agree that all information you provide to register with Krisp or otherwise, including but not limited to through the use of any content, features, functionality, or services on Krisp, is governed by our Terms of Use, including the Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Terms of Use, including the Privacy Policy.
              </p>
              <p>
                If you choose, or are provided with, a username, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You agree not to provide any other person with access to Krisp or portions of it using your username, password or other security information, except as authorized by these Terms of Use.
              </p>
            </div>

            {/* Section 10 */}
            <div id="confidentiality" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Confidentiality
              </h3>
              <p className="mb-4">
                <strong>Use.</strong> If the parties disclose Confidential Information to each other, the recipient will only use the disclosing party's Confidential Information to exercise its rights and fulfill its obligations under these Terms. The recipient will use at least reasonable care to protect Confidential Information. “Confidential Information” means information exchanged by the parties that would reasonably be understood to be confidential given the nature of the information and manner of disclosure, including business, product, technology, and marketing information, purchase orders, non-public payment terms, and Your Content.
              </p>
              <p className="mb-4">
                <strong>Non-use and Non-disclosure.</strong> The recipient shall not use any Confidential Information of the disclosing party for any purpose except as necessary to perform their duties under these Terms. The recipient will not disclose Confidential Information to anyone except to its affiliates, employees, agents, or contractors who need to know it and who are bound by confidentiality obligations at least as protective of Confidential Information as those described in this section.
              </p>
              <p>
                <strong>Compelled Disclosure.</strong> If recipient becomes legally compelled to disclose any Confidential Information, other than pursuant to a confidentiality agreement, recipient will provide disclosing party prompt written notice, if legally permissible, and will use its best efforts to assist disclosing party in seeking a protective order or another appropriate remedy.
              </p>
            </div>

            {/* Section 11 */}
            <div id="intellectual-property" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Intellectual Property Rights
              </h3>
              <p className="mb-4">
                Krisp, the Site, and its and their entire contents, features, functionality, and services (including but not limited to any and all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof, user accounts, Accounts, titles, computer code, themes, objects, avatars, avatar names, stories, dialogue, catch phrases, locations, concepts, artwork, animations, sounds, musical compositions, audio-visual effects, methods of operation, moral rights, any related documentation, “applets” incorporated into Krisp and/or the Site, and the client and server software, are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
              </p>
              <p>
                To the extent you send or transmit any communications, comments, questions, or suggestions, or related materials to Krisp suggesting or recommending changes to Krisp (“<strong>Feedback</strong>”), you hereby fully and exclusively assign to Company and its affiliates any such Feedback upon creation.
              </p>
            </div>

            {/* Section 12 */}
            <div id="trademarks" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Trademarks
              </h3>
              <p>
                The Company name, the names and application icons of Krisp, the Company and Krisp logo and all related names, logos, product and service names, designs and slogans are trademarks of the Company or its affiliates or licensors. You must not use any of the foregoing without the prior written permission of the Company. All other names, logos, product and service names, designs and slogans on Krisp are the trademarks of their respective owners.
              </p>
            </div>

            {/* Section 13 */}
            <div id="your-content" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Your Content
              </h3>
              <p className="mb-4">
                You may provide, upload, originate or otherwise transmit information, data, or other materials, in any form or medium (collectively, “<strong>Your Input</strong>”) in accessing or using Krisp, and Company may provide, create, or make available to you, in its sole discretion or as part of Krisp, certain derivatives, transcripts, meeting summaries, or other output generated by Company’s proprietary artificial intelligence models or Third-Party Models (collectively, “<strong>AI Output(s)</strong>”), resulting from Your Input (AI Output together with Your Input is hereinafter referred to as “<strong>Your Content</strong>”). As between you and us, you retain all ownership rights in Your Content.
              </p>
              <p className="mb-4">
                <strong>Our Obligations Over Your Content.</strong> Company will maintain reasonable and appropriate physical and technical safeguards to prevent unauthorized disclosure of or access to Your Content. Company will notify you if it becomes aware of an unauthorized disclosure or unauthorized access to Your Content. We do not monitor, or sell Your Content for any purpose. We do not control how Your Content is processed. Only if you opt to get summaries of your meeting transcripts will we share your meeting transcripts with an authorized third-party service provider in order to provide AI-generated meeting summaries to you.
              </p>
              <p>
                <strong>Your Responsibilities, Acknowledgement, and Consents.</strong> You agree that you are solely responsible for Your Content sent, uploaded, displayed, or transmitted in the use of Krisp, including its accuracy, and for compliance with all laws pertaining to Your Content. Company may provide features that allow you to transcribe and/or record individual conversations. You, not Company, shall have sole responsibility for compliance with all applicable Recording Laws.
              </p>
            </div>

            {/* Section 14 */}
            <div id="prohibited-uses" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Your Obligations and Prohibited Uses
              </h3>
              <p className="mb-4">
                You may use Krisp and the Site only for lawful purposes and in accordance with these Terms of Use. You agree not to use Krisp or the Site:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-[#525069]">
                <li>In any way that violates any applicable federal, state, local or international law or regulation (including Recording Laws);</li>
                <li>For the purpose of exploiting, harming or attempting to exploit or harm minors in any way;</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, junk mail, chain letter, or spam;</li>
                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user or any other person or entity;</li>
                <li>To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Krisp or the Site;</li>
                <li>To attack Krisp via a denial-of-service attack or a distributed denial-of-service attack.</li>
              </ul>
            </div>

            {/* Section 15 */}
            <div id="reliance" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Reliance on Information Posted
              </h3>
              <p>
                The information presented on or through Krisp and/or the Site is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            {/* Section 16 */}
            <div id="third-party-materials" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Third-Party Materials, Links and Models
              </h3>
              <p className="mb-4">
                Krisp and/or the Site may display, include, or make available third-party content or provide links to third-party websites, sites, resources, or services (“<strong>Third-Party Materials</strong>”). You acknowledge and agree that Company is not responsible for Third-Party Materials, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality, or any other aspect thereof.
              </p>
              <p>
                You acknowledge and agree that artificial intelligence or machine learning algorithms, programs or other models, including any large language model, developed or operated by a third party service provider used in connection with Krisp (“<strong>Third-Party Models</strong>”) are not developed by Company. Company does not control or influence the training of Third Party Models, and is unable to guarantee the suitability, accuracy, availability, quality, security, legality and reliability of Third Party Models.
              </p>
            </div>

            {/* Section 17 */}
            <div id="purchases-payments" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Purchases and Payments
              </h3>
              <p className="mb-4">
                Krisp will be provided according to the subscription plan level you select. You may opt to upgrade or downgrade to any other plan level that Company offers at any time during the period of your plan; provided that a downgrade will not be effective until the next renewal date.
              </p>
              <p className="mb-4">
                Krisp may be made available to you on a free trial basis for a limited period beginning on the date you create a trial Account (“<strong>Trial Period</strong>”). During the Trial Period you may access and use Krisp without charge. Upon expiry of the Trial Period, you will retain access to Your Content for a period of ninety (90) days solely for the purpose of exporting Your Content (“<strong>Post-Trial Access Period</strong>”).
              </p>
              <p>
                You agree to pay Company or Company’s authorized reseller all applicable fees in advance of each subscription term. Subscriptions will automatically renew for the same term as the initial term unless cancelled prior to renewal. All fees are non-refundable, except as expressly stated otherwise in this Agreement.
              </p>
            </div>

            {/* Section 18 */}
            <div id="term-termination" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Term; Termination and Refund
              </h3>
              <p className="mb-4 font-semibold">
                The term of your subscription to Krisp will automatically renew for successive terms equal in duration to the initial subscription term unless you cancel in advance of the renewal date by following the instructions in your account.
              </p>
              <p className="mb-4">
                <strong>Termination.</strong> A party may terminate these Terms for cause upon thirty (30) days written notice to the other party of a material breach if such breach remains uncured at the expiration of such period.
              </p>
              <p>
                <strong>Refunds.</strong> If these Terms are terminated by Customer for cause in accordance with the Termination section above, Company will refund Customer any prepaid fees covering the remainder of the subscription term after the effective date of termination.
              </p>
            </div>

            {/* Section 19 */}
            <div id="disclaimers" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Representations, Warranties, Exclusive Remedies and Disclaimers
              </h3>
              <p className="mb-4">
                Each party represents that it has validly entered into these Terms and has the legal power to do so. Company warrants that during an applicable subscription term these Terms and documentation will accurately describe the administrative, physical, and technical safeguards for protection of the security, confidentiality and integrity of Your Content.
              </p>
              <div className="bg-[#f9fafb] border border-[#e4e7ea] p-5 rounded-lg text-[14px] leading-[24px] text-[#525069]">
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, YOUR USE OF KRISP, ITS CONTENT, FEATURES, FUNCTIONALITY, AND ANY SERVICES OR ITEMS OBTAINED THROUGH KRISP IS AT YOUR OWN RISK. KRISP IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </div>
            </div>

            {/* Section 20 */}
            <div id="liability" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Limitation of Liability
              </h3>
              <p className="mb-4">
                EXCEPT FOR EITHER PARTY’S INDEMNIFICATION OBLIGATIONS, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL EITHER PARTY, OR ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS, LOSS OF DATA, OR BUSINESS INTERRUPTION.
              </p>
              <p>
                IN NO EVENT WILL EITHER PARTY’S AGGREGATE LIABILITY FOR ANY DIRECT DAMAGES ARISING OUT OF RELATED TO THIS AGREEMENT EXCEED THE FEES PAID (OR PAYABLE) BY CUSTOMER TO COMPANY HEREUNDER IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO SUCH LIABILITY.
              </p>
            </div>

            {/* Section 21 */}
            <div id="indemnification" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Indemnification
              </h3>
              <p className="mb-4">
                <strong>Company Indemnification.</strong> Company shall defend Customer from and against any claim by a third party alleging that the technology underlying Krisp, when used as authorized under this Agreement, directly infringes such third party’s copyright, U.S. patent, or trademark.
              </p>
              <p>
                <strong>Customer Indemnification.</strong> Customer shall indemnify, hold harmless, and, at Company’s option, defend Company from and against any Losses resulting from any Third Party Claim alleging that Your Content, or any use of Your Content in accordance with these Terms, infringes or misappropriates such third party’s intellectual property or other rights.
              </p>
            </div>

            {/* Section 22 */}
            <div id="beta-services" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Beta Services
              </h3>
              <p>
                You may choose to use early access trials or releases of new Krisp features identified as “alpha,” “beta,” “preview,” “early access,” or “evaluation” (“<strong>Beta Services</strong>”). Beta Services are provided “AS IS” without warranty, indemnity, or support.
              </p>
            </div>

            {/* Section 23 */}
            <div id="publicity" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Publicity
              </h3>
              <p>
                You grant us the right to use your company name and logo as a reference for marketing or promotional purposes on the Site and in other public or private communications. You may opt-out of our use of your company name and logo at any time by providing written notice to Krisp.
              </p>
            </div>

            {/* Section 24 */}
            <div id="export-regulation" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Export Regulation
              </h3>
              <p>
                Krisp may be subject to US export control laws, including the US Export Administration Act and its associated regulations. You shall not, directly or indirectly, export, re-export, or release Krisp to any jurisdiction or country to which export is prohibited by law.
              </p>
            </div>

            {/* Section 25 */}
            <div id="government-rights" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                U.S. Government Rights
              </h3>
              <p>
                Krisp is commercial computer software, as such term is defined in 48 C.F.R. §2.101. If you are an agency of the US Government or any contractor therefor, you receive only those rights with respect to the Application as are granted to all other end users under license.
              </p>
            </div>

            {/* Section 26 */}
            <div id="governing-law" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Governing Law
              </h3>
              <p>
                Except as expressly set forth in the Binding Arbitration/Class Action Waiver section below, all matters relating to Krisp and these Terms of Use shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision.
              </p>
            </div>

            {/* Section 27 */}
            <div id="arbitration" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Binding Arbitration/Class Action Waiver
              </h3>
              <p className="mb-4">
                <strong>Dispute Resolution.</strong> Any dispute, controversy or claim arising out of or relating to these Terms of Use, including the formation, interpretation, breach or termination thereof, including whether the claims asserted are arbitrable, will be referred to and finally determined by arbitration in accordance with the JAMS Streamlined Arbitration Rules.
              </p>
              <p className="mb-4 font-semibold text-[#131032]">
                Class Action Waiver. YOU AND COMPANY EACH AGREE THAT ANY DISPUTE RESOLUTION PROCEEDING WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE ACTION.
              </p>
              <p>
                <strong>Your Right to Opt-Out.</strong> You have the right to opt-out and not be bound by the arbitration and class action waiver provisions set forth above by sending written notice within thirty (30) days of your first use of Krisp to: support@krisp.ai with the subject line “KRISP ARBITRATION AND CLASS ACTION WAIVER OPT-OUT.”
              </p>
            </div>

            {/* Section 28 */}
            <div id="waiver" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Waiver and Severability
              </h3>
              <p>
                No waiver by the Company of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition. If any provision of these Terms of Use is held by a court of competent jurisdiction to be invalid, illegal or unenforceable, such provision shall be eliminated or limited to the minimum extent necessary.
              </p>
            </div>

            {/* Section 29 */}
            <div id="entire-agreement" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Entire Agreement
              </h3>
              <p>
                The Terms of Use and our Privacy Policy constitute the sole and entire agreement between you and Krisp Technologies, Inc. with respect to the application Krisp and its Site, www.krisp.ai, and supersede all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral.
              </p>
            </div>

            {/* Section 30 */}
            <div id="comments-concerns" className="scroll-mt-28 mb-12">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#131032] mb-4">
                Your Comments and Concerns
              </h3>
              <p className="mb-4">
                Krisp is operated by Krisp Technologies, Inc., a Delaware corporation with an address at 2150 Shattuck Ave, Penthouse 1300, Berkeley, CA 94704.
              </p>
              <p>
                All other feedback, comments, requests for technical support and other communications relating to Krisp should be directed to:{" "}
                <a href="mailto:support@krisp.ai" className="text-[#614efa] underline font-semibold hover:text-[#4a3bbe]">
                  support@krisp.ai
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
