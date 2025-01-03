import Navbar from '@/components/atoms/Navbar';
import Footer from '@/components/molecules/Footer';
import React from 'react';

export default async function TncPage() {
  return (
    <>
      <Navbar />
       <div className='h-screen w-full flex flex-col gap-4 p-6' >
        <div id='tnc' >
        <p className='text-[2rem] text-center font-semibold' >Terms And Conditions</p>
        <div className="bg-white text-gray-800 p-8 space-y-6">
      {/* Introduction Section */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Terms of Use</h1>
        <p>
          This Terms of Use (the “Terms”) provided below is with respect to the access and use of the <a href="http://www.doctornewsdaily.com" className="text-blue-500">http://www.doctornewsdaily.com</a> website (the “Site”) which may be accessed via, but not restricted to, the World Wide Web, PDA, mobile phone, tablets, digital television, smartwatches, RSS feeds or various other new media platforms.
        </p>
        <p>
          These terms and conditions apply whenever you access the site, on whatever devices. This Agreement is for an indefinite term and you understand and agree that you are bound by such terms till the time you access this site.
        </p>
      </section>

      {/* Terms and Conditions Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">TERMS & CONDITIONS - DOCTOR NEWS DAILY</h2>
        <p>
          By subscribing/registering to/on or using <a href="https://doctornewsdaily.com" className="text-blue-500">https://doctornewsdaily.com</a> and/or its sub-domains collectively referred to as “Doctor News Daily site” and/or any services provided on the Doctor News Daily site, you agree that you have read, understood, and have agreed to be legally bound by the Terms and Conditions, regardless of how you subscribe to or use the services. If you do not want to be bound by the Terms and Conditions, you must not subscribe to or register or use the Doctor News Daily site or any of its services.
        </p>
        <p>
          For the purpose of these Terms and Conditions, wherever the context so requires "you" or "your" or "User" shall mean any natural or legal person who has agreed to become a member of the Doctor News Daily site by registering on the Doctor News Daily site as a registered User or a person who has used the Doctor News Daily site either through browsing or otherwise. Your access or use of the Doctor News Daily site is subject to the Terms and Conditions as set out herein (“Terms and Conditions”) and the Privacy Policy made available at the Doctor News Daily site. “We”, “us”, “our”, “Doctor News Daily” shall mean Elivista Consortium and/or any of its affiliated entities.
        </p>
      </section>

      {/* Doctor News Daily Service Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">DOCTOR NEWS DAILY SERVICE</h2>
        <p>
          Doctor News Daily is a website which provides the latest news, information, and developments related to the health sector in India. We provide a unique platform for consolidated news in the healthcare sector, including medical news, pharmaceutical news, news related to the latest medical technology, medical education, hospitals, and happenings in healthcare, etc.
        </p>
        <p>
          Doctor News Daily shall be entitled to modify these Terms and Conditions, the Privacy Policy, and any other rules, regulations, and/or documents made available to Users on the Doctor News Daily site, at any time, by posting the same on the Doctor News Daily site. Use of Doctor News Daily constitutes your acceptance of such Terms and Conditions and the rules referred to herein or provided by Doctor News Daily in relation to any Doctor News Daily services, as may be amended from time to time. You may then exercise the options provided in such a notification to indicate non-acceptance of the modified Terms and Conditions or the rules. If such an option is not exercised by you within the time frame prescribed in the notification, you will be deemed to have accepted the modified Terms and Conditions and the rules provided by Doctor News Daily.
        </p>
      </section>

      {/* Third-Party Links Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Third-Party Links</h2>
        <p>
          Doctor News Daily site and/or emailers may contain links to third-party websites that are not owned or controlled by Doctor News Daily. Doctor News Daily has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites/apps. In addition, Doctor News Daily will not and cannot censor or edit the content of any third-party site. By using the Doctor News Daily site and its services, you expressly acknowledge and agree that Doctor News Daily shall not be responsible for any damages, claims, or other liability arising from or related to your use of any third-party website.
        </p>
      </section>
    </div>
    <div className="bg-white text-gray-800 p-8 space-y-6">
      {/* User Registration Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">USER REGISTRATION</h2>
        <p>
          You may use the Doctor News Daily site without registration. However, to participate in the activities of the Doctor News Daily site, you shall be required to create an account and log in on the Doctor News Daily site. You shall do so after completing the registration process by:
        </p>
        <ul className="list-disc pl-6">
          <li>Providing true, accurate, correct, and complete information as prompted by the applicable registration form.</li>
          <li>Maintaining and updating true, accurate, correct, and complete information provided by you during the registration process.</li>
        </ul>
        <p>
          You shall be required to choose a username and password. You shall be solely responsible for maintaining the confidentiality of your account username and password. You shall be solely responsible for the registration information provided by you during submissions and the consequences of posting or publishing them. Doctor News Daily is only acting as a repository of data and makes no guarantee as to the validity, accuracy, or legal status of any information/submissions.
        </p>
        <p>
          If, at any time, Doctor News Daily believes that your account and password are being misused in any manner, or that the information provided by you during the above-stated registration process is not true, inaccurate, or incomplete, then Doctor News Daily reserves the right to terminate/cancel or suspend your account and block your access to the Doctor News Daily site.
        </p>
        <p>
          You shall be solely and exclusively responsible for any and/or all the activities that are carried out through your account. You agree to notify Doctor News Daily of any unauthorized use of your account and/or any breach of security via email at <a href="mailto:info@doctordailynews.com" className="text-blue-500">info@doctordailynews.com</a>. Doctor News Daily shall not be liable for any loss that you may incur as a result of another person(s) using your account username and/or password and/or your failure to comply with this section.
        </p>
        <p>
          You shall be solely and exclusively liable for all the losses to Doctor News Daily and/or other claims, damages, fines due to such unauthorized use and/or for providing any incorrect information, including making any false representation to Doctor News Daily. It is hereby clarified that in the event you represent to Doctor News Daily that you are a health professional and/or doctor, when such is not the case, you shall solely be responsible for any claim, damages, or liabilities that arise from such misrepresentation.
        </p>
      </section>

      {/* Charges Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CHARGES</h2>
        <p>
          Doctor News Daily reserves its right to charge subscription and/or membership fees from its Users in respect of any part, aspect of Doctor News Daily site upon reasonable prior notice.
        </p>
        <p>
          If Doctor News Daily charges you a platform fee (facilitation fee) in respect of any Doctor News Daily services, Doctor News Daily shall, without delay, refund such platform fee in the event of suspension and/or termination of your account or Doctor News Daily services on account of any fault on the part of Doctor News Daily. 
        </p>
        <p>
          It is hereby clarified that no refund shall be payable if such suspension and/or termination is effected due to any breach or failure to adhere to any of these Terms and Conditions, Privacy Policy, and/or any other rules by you, the User, or a person(s) accessing your account by using your username and password; or any circumstances beyond the reasonable control of Doctor News Daily.
        </p>
      </section>

      {/* Submission Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">SUBMISSION TO THE DOCTOR NEWS DAILY SITE</h2>
        <p>
          Users may submit material for publication. We accept no liability with respect to any material submitted by users and published by us, and we are not responsible for its content and accuracy.
        </p>
        <p>
          When you send any material, photograph, animated or graphical material to us, you do so in accordance with these Terms & Conditions. You hereby agree that you have prior requisite permission from or are the authorized owner of the material/photograph(s)/animated/graphical material and you are granting us a nonexclusive, royalty-free license to publish or otherwise use the material/photograph(s)/animated/graphical material in any way and at any time we want on the Doctor News Daily site. Any material sent for publication to Doctor News Daily shall not be defamatory and violative of any rules, regulations, or laws of India.
        </p>
        <p>
          Selected material/photograph(s)/animated/graphical material shall be published on Doctor News Daily site at the discretion of the editor and you shall not be liable to be paid for any such publication.
        </p>
        <p>
          We shall cut, edit, crop, or arrange your material/photograph(s)/animated/graphical material as we think fit to appear on the Doctor News Daily site, and we may remove your material/photograph(s)/animated/graphical material at any time.
        </p>
        <p>
          Any material sent by a User for publishing on the Doctor News Daily site shall be credited with his/her name alongside the material submitted.
        </p>
      </section>
    </div>
    <div className="bg-white text-gray-800 p-8 space-y-8">
      {/* REGISTRATION Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">REGISTRATION</h2>
        <p>
          By using the Doctor News Daily site, Users warrant that all information submitted by them is true, accurate and complete. Proof of age may be required. The sole discretion to declare a User ineligible to use Doctor News Daily site shall vest with Doctor News Daily. Users who wish to participate shall have a valid email address. In order to use the Doctor News Daily site, Users are required to accurately provide the following information:
        </p>
        <ul className="list-disc pl-6">
          <li>Full Name</li>
          <li>Phone Number</li>
          <li>E-mail address</li>
          <li>Password</li>
          <li>Work Category</li>
          <li>Specialisation/Interest</li>
          <li>Designation</li>
          <li>Organisation</li>
          <li>Country</li>
          <li>State</li>
          <li>City</li>
        </ul>
      </section>

      {/* USE OF THE DOCTOR NEWS DAILY SITE Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">USE OF THE DOCTOR NEWS DAILY SITE</h2>
        <p>
          All materials provided on the Doctor News Daily site, including but not limited to all information, articles, materials, functions, text, logos, designs, graphics, images, sounds, software, documents, products and services (collectively, the "Materials"), and the selection, arrangement and display thereof, are the copyrighted works of Doctor News Daily and/or its vendors and/or suppliers. All Materials herein are only for general information or use. They do not constitute advice and should not be relied upon in making (or refraining from making) any decision.
        </p>
        <p>
          Any specific advice or replies to queries in any part of the Doctor News Daily site is/are the personal opinion of such experts/consultants/persons and are not subscribed to by the Doctor News Daily. The information from or through Doctor News Daily site is provided on an “as is” basis, and all warranties, expressed or implied of any kind, regarding any matter pertaining to any goods, service or channel, including without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement are disclaimed and excluded.
        </p>
        <p>
          All Materials herein and Doctor News Daily’ software are the exclusive properties of Doctor News Daily. Except as stated herein, none of the Materials may be modified, copied, reproduced, distributed, republished, downloaded, displayed, sold, compiled, posted or transmitted in any form or by any means, including but not limited to, electronic, mechanical, photocopying, recording or other means, without the prior written permission of Doctor News Daily.
        </p>
        <p>
          Subject to your compliance with these Terms and Conditions, Doctor News Daily hereby grants you the right to access and use the Doctor News Daily site only for personal and non-commercial purposes. You undertake that you shall not use the Doctor News Daily site for any commercial purposes and/or in any way that is unlawful, or harms us or any other person or entity, as determined in our sole discretion.
        </p>
        <p>
          You may post and/or share links/images/text content of Doctor News Daily site on social media platforms like Facebook, Twitter, Google+, Snapchat, Instagram, YouTube or any other social media sharing platform with appropriate link-back to the original source.
        </p>
        <p>
          When the Doctor News Daily site provides for the download of any particular Material including any software, you may download such Material and/or software to a computer or mobile device (as applicable) for your personal, non-commercial use only, provided that you shall:
        </p>
        <ul className="list-decimal pl-6">
          <li>keep a record of and not amend copyright and other proprietary notices;</li>
          <li>make no modifications to, and do not rent, lease, loan, sell, distribute, copy (except to create a single copy for your own back-up purposes), or create any derivative works based on the Doctor News Daily site or the Material including the software, in whole or in part, and;</li>
          <li>not transfer any Material and/or software and/or any part thereof to any other computer and/or mobile device. Any commercial or business use of the Doctor News Daily site or any Material including the software is expressly prohibited.</li>
        </ul>
        <p>
          Except as expressly provided above, nothing contained herein shall be construed as conferring, by implication, estoppel or otherwise, any license or right under any patent, trademark, design or copyright of the Doctor News Daily’ intellectual properties.
        </p>
        <p>
          You acknowledge and agree that nothing in these Terms and Conditions shall have the effect of transferring the ownership of any copyrights, trademarks, service marks, trade names, source code or other proprietary rights on the Doctor News Daily site or Material or software or any part thereof to you or any third party.
        </p>
      </section>

      {/* PROHIBITED USE Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">PROHIBITED USE</h2>
        <p>
          As a condition of your use of the Doctor News Daily site, you shall not use the Doctor News Daily site for any purpose that is unlawful or prohibited under these Terms and Conditions or under any Indian laws, statutes, order, ordinances and regulations. The duty to verify whether the use of the Doctor News Daily site is legal in your jurisdiction is your sole and exclusive responsibility.
        </p>
        <p>
          You shall not display, upload, modify, publish, transmit, update or share any information on the Doctor News Daily site that is (including but not limited to):
        </p>
        <ul className="list-disc pl-6">
          <li>criminal or tortious activity, including child pornography, fraud including financial fraud and money laundering, trafficking in obscene material, drug dealing, gambling, harassment, stalking, spamming, spimming, sending of viruses or other harmful files, copyright infringement, patent infringement, or theft of trade secrets;</li>
          <li>promoting illegal or tortuous activities or conduct that is abusive, threatening, obscene, defamatory or libellous;</li>
          <li>using photos and/or pictures that are sexually explicit or pornographic, exposing the female breast or full exposure of either male or female buttocks, or any or all portions of the human genitalia;</li>
          <li>attempting to circumvent, disable or otherwise interfere with security-related features of Doctor News Daily or features that prevent or restrict use or copying of any content or enforce limitations on the use of Doctor News Daily or the content therein;</li>
          <li>using cheats, exploits, automation software, bots, hacks, mods or any other unauthorized software designed to modify or interfere with the Doctor News Daily site, and taking advantage of cheats or exploits;</li>
          <li>using any software that intercepts, mines, or otherwise collects information about other Users or copies and stores any Proprietary Materials;</li>
          <li>interfering with, disrupting, or creating an undue burden on the Doctor News Daily site or the networks connected to the Doctor News Daily site;</li>
          <li>attempting to impersonate another User or person;</li>
          <li>soliciting personal information from anyone under the eighteen (18) years of age;</li>
          <li>collecting, harvesting, soliciting or posting passwords or personally identifiable information from other Users;</li>
          <li>using the account, username, or password of another account holder at any time or disclosing the User account password to any third party or permitting any third party to access the User Account;</li>
          <li>using any information obtained from the Doctor News Daily site in order to harass, abuse, or harm another person;</li>
          <li>using any unfair, misleading or deceptive content intended to draw traffic to one’s profile;</li>
          <li>using the Doctor News Daily site and/or software in a manner inconsistent with any and all applicable laws and regulations;</li>
          <li>sub-license, rent, lease, sell, trade, gift, bequeath or other transfer of the User account associated with the User account to anyone;</li>
          <li>access or use of a third-party account that has been sub-licensed, rented, leased, sold, traded, gifted, bequeathed, or otherwise transferred from the holder or the original account creator; and</li>
          <li>using the Doctor News Daily site and/or software and/or Materials for commercial purposes.</li>
        </ul>
      </section>

      {/* USER CONDUCT Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">USER CONDUCT</h2>
        <p>
          You agree to abide by these Terms and Conditions and all other rules, regulations of the Doctor News Daily site. In the event you do not abide by these Terms and Conditions and all other rules, regulations, Doctor News Daily may, at its sole and exclusive discretion, take necessary remedial action, including but not limited to:
        </p>
        <ul className="list-disc pl-6">
          <li>restricting, suspending, or terminating your access to all or any part of Doctor News Daily services;</li>
          <li>deactivating or deleting your account and all related information and files on the account.</li>
        </ul>
        <p>
          You agree to provide true, accurate, current and complete information at the time of registration and at all other times (as required by Doctor News Daily). You further agree to update and keep updated your registration information as and when required by Doctor News Daily.
        </p>
        <p>
          You shall not register or operate more than one User account with Doctor News Daily.
        </p>
        <p>
          You shall provide all the necessary information as and when required by Doctor News Daily as per compliance of the Republic of India laws and regulations.
        </p>
        <p>
          You agree to ensure that you can receive all communication from Doctor News Daily by marking e-mails from Doctor News Daily as part of your "safe senders" list. Doctor News Daily shall not be held liable if any e-mail remains unread as a result of such an e-mail being delivered to your junk and/or spam folder.
        </p>
        <p>
          Any password issued by Doctor News Daily to you shall not be revealed to anyone else. You shall strictly avoid using anyone else's password. You shall be responsible for maintaining the confidentiality of your account and password. You agree to immediately notify Doctor News Daily of any unauthorized use of your account or any other breach of security.
        </p>
        <p>
          You agree to exit/log-out of your accounts at the end of each session. Doctor News Daily shall not be responsible for any loss and/or damage that may result if you fail to comply with these requirements.
        </p>
        <p>
          You agree not to use exploits, automation, software, bots, hacks or any unauthorized third-party software designed to modify or interfere with Doctor News Daily’ services and/or Doctor News Daily’ experience or assist in such activity.
        </p>
        <p>
          You agree not to copy, modify, rent, lease, loan, sell, assign, distribute, reverse engineer, grant a security interest in, or otherwise transfer any right to the technology or software underlying Doctor News Daily or Doctor News Daily’ services.
        </p>
        <p>
          You agree that you shall not modify or cause to modify any files or software that are a part of Doctor News Daily’ services.
        </p>
        <p>
          You agree not to disrupt, overburden, or aid or assist in the disruption or overburdening of (a) any computer or server used to offer or support Doctor News Daily or the Doctor News Daily’ services (each a "Server"); or (b) enjoyment of the Doctor News Daily’ services by any other User or person.
        </p>
        <p>
          You agree not to institute, assist or become involved in any type of attack, including without limitation to the distribution of a virus, denial of service, or other attempts to disrupt the Doctor News Daily’ services or any other person's use or enjoyment of the Doctor News Daily’ services.
        </p>
        <p>
          You shall not attempt to gain unauthorized access to the User accounts, servers or networks connected to the Doctor News Daily’ services by any means other than the User interface provided by Doctor News Daily for use in accessing the Doctor News Daily site.
        </p>
        <p>
          If you choose a username that, in Doctor News Daily’ opinion, is considered to be obscene, indecent, abusive or that might subject Doctor News Daily to public disparagement or scorn, Doctor News Daily reserves the right, without prior notice, to change such username and intimate you or delete such username from Doctor News Daily, deny you access to Doctor News Daily, or any combination of these options.
        </p>
        <p>
          Unauthorized access to the Doctor News Daily site shall be considered a breach of these Terms and Conditions, Privacy Policy and a violation of the applicable Republic of India laws and regulations.
        </p>
        <p>
          Users provide their acceptance for not using the Doctor News Daily platform for any sort of inadequate activities including (but not limited to): to engage in any obscene, offensive, indecent, racial, communal, anti-national, objectionable, defamatory or abusive action or communication; to harass, stalk, threaten, or otherwise, violate any legal rights of other individuals; to transmit files that contain viruses, corrupted files, or any other similar software or programs that may damage or adversely affect the operation of another person's computer, Doctor News Daily site, any software, hardware, or telecommunications equipment; to advertise, offer or sell any goods or services for any commercial purpose on Doctor News Daily site without written consent of Doctor News Daily; to Transmit content regarding services, products, surveys, contests, pyramid schemes, spam, unsolicited advertising or promotional materials, or chain letters.
        </p>
      </section>
    </div>
    <div className="bg-white text-gray-800 p-8 space-y-8">
      {/* THIRD PARTY WEBSITES Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">THIRD PARTY WEBSITES</h2>
        <p>
          The Doctor News Daily site may provide links to third party websites and/or send emails which may contain links to third party websites, advertisements and/or advertorials. Doctor News Daily does not endorse the information contained on those websites/emailers and/or guarantee their quality, accuracy, reliability, completeness, currency, timeliness, non-infringement, merchantability and/or fitness for any purpose. The content in any linked website is not under Doctor News Daily control, and if you choose to access any such web site, you do so entirely at your own risk.
        </p>
      </section>

      {/* RELATIONSHIP WITH THIRD-PARTY SERVICES Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Relationship with Third-Party Services</h2>
        <p>
          Your relationship with the third-party service providers associated with your third-party accounts is governed solely by your agreement(s) with such third-party service providers, and Doctor News Daily disclaims any liability for personally identifiable information/confidential information that may be provided to it by such third-party service providers in violation of the privacy settings that You have set in such third-party accounts. Doctor News Daily makes no effort to review any Third-Party Services content for any purpose, including but not limited to, for accuracy, legality or non-infringement, and Doctor News Daily is not responsible for any content of any Third-Party Services. You should note that a Third-Party Service may change or amend its guidelines and our access to it at any time, and we cannot guarantee that our services will always include a connection to such Third-Party Service.
        </p>
      </section>

      {/* PRIVACY POLICY Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">PRIVACY POLICY</h2>
        <p>
          The User hereby consents and agrees that she/he has read and fully understood the contents and terms of the Privacy Policy of Doctor News Daily and by using the Doctor News Daily Site, the User has consented to such content and terms of the Privacy Policy of Doctor News Daily. Our Privacy Policy (which shall be available Here) shall apply to all the entries to the services on the Doctor News Daily site.
        </p>
      </section>

      {/* COMMUNICATIONS NOT CONFIDENTIAL Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">COMMUNICATIONS NOT CONFIDENTIAL</h2>
        <p>
          Doctor News Daily does not guarantee the confidentiality of any communications provided by you through the Doctor News Daily site. Although Doctor News Daily generally adheres to the accepted industry practices in securing the transmission of data to, from and through the Doctor News Daily site, you understand, agree and acknowledge that Doctor News Daily cannot and does not guarantee the security of data transmitted over the Internet and/or public networks in connection with your use of the Doctor News Daily site.
        </p>
      </section>

      {/* INTELLECTUAL PROPERTY RIGHTS Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">INTELLECTUAL PROPERTY RIGHTS</h2>
        <p>
          Unless otherwise stated, copyright and/or all intellectual property rights in all Materials on the Doctor News Daily site (including but not limited to text, audio, video or graphical images, or technology, the look and feel of the Doctor News Daily site), trademarks and logos appearing on the Doctor News Daily site are the properties of Doctor News Daily and are owned & controlled by us and/or by other parties that have licensed their material to us.
        </p>
        <p>
          You shall not copy, reproduce, republish, upload, post, transmit or distribute the Doctor News Daily site Material in any way, including by e-mail and/or other electronic means and whether directly or indirectly and/or assist any other person to do the same. Without the prior written consent of the owner of the Materials, modification, use of the Materials on any other web site and/or networked computer environment and/or use of the Materials for any purpose other than personal, non-commercial use shall be considered a violation of the copyrights, trademarks and other proprietary rights of Doctor News Daily and shall be prohibited.
        </p>
        <p>
          Any use of the Material other than for personal and non-commercial purposes shall be considered as commercial use for the purposes of this clause. You agree not to use any framing techniques to enclose any trademark or logo or other proprietary information of Doctor News Daily or remove, conceal or obliterate any copyright or other proprietary notice or any credit-line or date-line on other mark or source identifier included on the Doctor News Daily site, including without limitation, the size, colour, location or style of all proprietary marks. Any infringement shall be vigorously defended and pursued to the extent permitted by law.
        </p>
        <p>
          We, at Doctor News Daily, respect other people's intellectual property rights and if you believe that any content or material on the Doctor News Daily site infringes on your intellectual property rights, you can write and inform us about the same at info@doctornewsdaily.com
        </p>
      </section>

      {/* ADVERTISING MATERIAL Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ADVERTISING MATERIAL</h2>
        <p>
          Doctor News Daily site may contain advertising information, surveys, promotion material, advertisement, advertorials or other material submitted to Doctor News Daily by third parties. By registering on the Doctor News Daily website you expressly agree that Doctor News Daily based on the information provided by you, shall have the right to send you emailers, which may contain third-party advertisement and/or articles/advertorials. Responsibility for ensuring that the material submitted for inclusion on the Doctor News Daily site and/or emailers complies with the applicable law is exclusively on the party providing the information/material. Your correspondence or business dealings with, or participation in the promotions of advertisers or including the payment and delivery of related goods or services, and/or any other terms, conditions, warranties or representations associated with such dealings, are solely between You and such advertiser. Doctor News Daily shall not be responsible and/or liable for any claim, error, omission, inaccuracy in advertising material and/or any loss or damage of any sort incurred as a result of any such dealings or as a result of the presence of such advertisers on the Doctor News Daily site. Doctor News Daily reserves the right to omit, suspend or change the position of any advertising material submitted for insertion. All the advertising on the Doctor News Daily site shall be governed by Advertising Policy [ click here] and other rules, regulations and documents of Doctor News Daily including but not limited to these Terms and Conditions and Privacy Policy.
        </p>
      </section>

      {/* LIMITATION OF LIABILITY Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">LIMITATION OF LIABILITY</h2>
        <p>
          In no event shall Doctor News Daily, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any:
        </p>
        <ul className="list-disc pl-6">
          <li>errors, mistakes, or inaccuracies of content available on Doctor News Daily site;</li>
          <li>personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our service;</li>
          <li>any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein;</li>
          <li>any interruption and/or cessation of transmission to or from our servers;</li>
          <li>any misrepresentation;</li>
          <li>any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our service by any third party;</li>
          <li>any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the Doctor News Daily client, whether based on warranty, contract, tort, or any other legal theory, and whether or not Doctor News Daily is advised of the possibility of such damages; and/or</li>
          <li>the disclosure of information pursuant to these Terms and Conditions or privacy policy of Doctor News Daily. The foregoing limitation of liability shall apply to the extent permitted by law in the applicable jurisdiction.</li>
        </ul>
        <p>
          You specifically acknowledge that Doctor News Daily shall not be liable for any defamatory, offensive, or illegal conduct of any third party and that the risk of any harm or damage from the foregoing shall rest entirely with you.
        </p>
        <p>
          Doctor News Daily shall not be liable, at any time for damages (including, without limitation, damages for loss of business projects, or loss of profits) arising in contract, tort or otherwise from the use of or inability to use the Doctor News Daily site, or any of its contents, or from any act or omissions a result of using the Doctor News Daily site or any such contents or for any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, hacking, communications line failure, theft or destruction or unauthorised access to, alteration of, or use of information contained on the Doctor News Daily site. No representations, warranties or guarantees whatsoever are made as to the accuracy, adequacy, reliability, completeness, suitability or applicability of the information to a particular situation.
        </p>
      </section>

      {/* TECHNICAL FAILURES AND DISCONNECTION POLICY Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">TECHNICAL FAILURES AND DISCONNECTION POLICY</h2>
        <p>
          It is possible that you may face disruptions, including, but not limited to errors, disconnection or interferences in communication in the Internet services, software or hardware that you have used to avail our services.
        </p>
        <p>
          Doctor News Daily shall not be liable for any network outage or any problems/interruptions with network connectivity including network, Internet services, computer hardware or software failures of any kind in the disruption in the services as the same is beyond Doctor News Daily’ control. You take full responsibility with complete knowledge for any risk of loss or damages caused due to interruption of services for any such reasons.
        </p>
      </section>

      {/* INDEMNITY Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">INDEMNITY</h2>
        <p>
          You agree to defend, indemnify and hold harmless Doctor News Daily, its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Doctor News Daily site; (ii) your violation of any term of these Terms and Conditions; (iii) your violation of any third party right, including without limitation any trademark, copyright, property, or any other privacy right; (iv) any violation of applicable law, rules, regulation, orders and ordinance. This defence and indemnification obligation shall survive these Terms and Conditions.
        </p>
      </section>

      {/* APPLICABLE LAW AND JURISDICTION Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">APPLICABLE LAW AND JURISDICTION</h2>
        <p>
          Doctor News Daily is created and controlled by Elivista Consortium in India. As such, the laws of India shall govern these Terms & Conditions along.
        </p>
        <p>
          The Courts of competent jurisdiction at Delhi shall have exclusive jurisdiction to determine any and all disputes arising out of, or in connection with, the Doctor News Daily services provided by Doctor News Daily (including the Contest(s)), the construction, validity, interpretation and enforceability of these Terms and Conditions, or the rights and obligations of the User(s) (including Users) or Doctor News Daily, as well as the exclusive jurisdiction to grant interim or preliminary relief in case of any dispute referred to arbitration as given below. All such issues and questions shall be governed and construed in accordance with the laws of the Republic of India.
        </p>
      </section>
    </div>
    <div className="bg-white text-gray-800 p-8 space-y-8">
      {/* DISPUTE RESOLUTION Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">DISPUTE RESOLUTION</h2>
        <p>
          If any question, issue, difference or dispute arises between the disputing parties as to the interpretation of these Terms and Conditions or as to the duties and/or liabilities of either party to these Terms and Conditions hereunder or as to any matter and/or thing arising out of or under these Terms and Conditions, the party raising the dispute shall provide a written notification ("Notification") to the other party. On receipt of Notification, the parties shall first try to resolve the dispute through discussions.
        </p>
        <p>
          In the event that the parties are unable to resolve the dispute within fifteen (15) days of receipt of Notification, the dispute shall be settled by arbitration by sole arbitrator to be appointed mutually by the disputing parties. The Arbitration proceedings shall be conducted at Delhi in accordance with the Indian Laws (both Substantive and Procedural) under the Arbitration and Conciliation Act, 1996 as amended and re-enacted from time to time and the Award so made shall be final and binding on all the parties. The language of arbitration proceedings shall be English.
        </p>
        <p>
          The arbitrator shall be entitled to pass interim orders and awards, including the orders for specific performance and such orders would be enforceable in competent courts. The arbitrator shall give a reasoned award.
        </p>
        <p>
          Nothing contained in these Terms and Conditions shall prevent Doctor News Daily from seeking and obtaining interim or permanent equitable or injunctive relief, or any other relief available to safeguard Doctor News Daily’ interest prior to, during or following the filing of arbitration proceedings or pending the execution of a decision or award in connection with any arbitration proceedings from any court having jurisdiction to grant the same. The pursuit of equitable or injunctive relief shall not constitute a waiver on the part of Doctor News Daily to pursue any remedy for monetary damages through the arbitration described herein.
        </p>
      </section>

      {/* REPRESENTATIONS AND WARRANTIES Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">REPRESENTATIONS AND WARRANTIES</h2>
        <p>
          The User, not limiting his/her statutory rights, expressly acknowledges and agrees to the following:
        </p>
        <ul className="list-disc pl-6">
          <li>The User uses the Doctor News Daily site at his or her own risk. Doctor News Daily expressly disclaims all express or implied representations or warranties.</li>
          <li>The User understands that certain delays can occur in Doctor News Daily’ system/network and therefore he/she shall not hold Doctor News Daily or any Doctor News Daily provider, responsible for any system/network related problems.</li>
        </ul>
        <p>
          Doctor News Daily does not guarantee, amongst other things that:
        </p>
        <ul className="list-disc pl-6">
          <li>the content available on Doctor News Daily site and/or Doctor News Daily site will meet the User’s expectations;</li>
          <li>the content available on Doctor News Daily site and/or Doctor News Daily site will be accessible without interruption or in a timely, reliable or fault-free manner;</li>
          <li>the results obtained through use of the Doctor News Daily site will be correct and reliable;</li>
          <li>the quality of the products, services, information or other material purchased or obtained by the User through Doctor News Daily site will meet the User's expectations.</li>
        </ul>
        <p>
          The User shall be solely responsible for damages to his/her data system or for loss of data arising from downloads of content from the Doctor News Daily site.
        </p>
      </section>

      {/* BREACH AND CONSEQUENCES Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">BREACH AND CONSEQUENCES</h2>
        <p>
          If we have evidence of a breach of our Terms and Conditions and any other rules, regulations or any other document including but not limited to Advertising Policy and Privacy Policy of Doctor News Daily through our investigations or reasonable belief that your continued access to Doctor News Daily site is deleterious or detrimental to the interests of Doctor News Daily and/or our Users or the general public, then we reserve the right in our sole discretion to take one or all of the actions as mentioned below:
        </p>
        <ul className="list-disc pl-6">
          <li>Permanent suspension and/or termination of your User account on our platform;</li>
          <li>Demand and order damages for breach of Doctor News Daily Terms and Conditions and any other rules, regulations or any other document including but not limited to Advertising Policy and Privacy Policy and take required civil actions to recover damages;</li>
          <li>Initiate steps of prosecution for damages and violation that is equivalent to offences in law;</li>
        </ul>
        <p>
          The action taken by us will be solely due to your breach of our Terms and Conditions any other rules, regulations or any other document including but not limited to Advertising Policy and Privacy Policy of Doctor News Daily; the action shall be final and decisive that will be binding on you. Any action taken by us will be without prejudice to our other rights and remedies that are mentioned and available in law or equity.
        </p>
      </section>

      {/* TERMINATION Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">TERMINATION</h2>
        <p>
          We reserve the right, at our discretion, to immediately, with or without notice, suspend or terminate your registration, the Terms and Conditions and/or your access to all or any portion of the Doctor News Daily site and/or remove any registration information or User Content from the Doctor News Daily site. Upon termination or expiration of the Terms and Conditions, your obligations and Doctor News Daily’ rights and disclaimers survive, but your right to use the Doctor News Daily site immediately ceases.
        </p>
      </section>

      {/* DISCLAIMERS Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">DISCLAIMERS</h2>
        <p>
          Doctor News Daily shall make best endeavors to ensure that the Doctor News Daily site is error-free and secure. However, neither Doctor News Daily nor any of its partners, licensors or associates make any warranty that:
        </p>
        <ul className="list-disc pl-6">
          <li>The platform will meet Users’ requirements,</li>
          <li>The platform will be uninterrupted, timely, secure, or error-free,</li>
          <li>The results that may be obtained from the use of the platform will be accurate or reliable.</li>
        </ul>
        <p>
          Complying to the legal bodies and authorities neither Doctor News Daily nor its partners, licensors or associates disclaims any sort of responsibility for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use our sites, even if we have been advised of the possibility of such damages.
        </p>
      </section>

      {/* MEDICAL DISCLAIMER Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Medical Disclaimer</h2>
        <p>
          The Materials available on the Doctor News Daily site are for informational and educational purposes for doctors and healthcare professionals only and are not a substitute for the professional judgment of a health care professional in diagnosing and treating patients. Users are not permitted to advise, diagnose, or otherwise treat any person based on material/information available of Doctor News Daily site. Neither the content nor any other service offered by or through Doctor News Daily site is intended to be for medical diagnosis or treatment. Persons accessing this information assume full responsibility for the use of the information and agree that Doctor News Daily is not responsible or liable for any claim, loss, or damage arising from the use of the information. Doctor News Daily does not recommend or endorse any specific drugs, tests, physicians, products, procedures, opinions, “off-label” drug uses or other information that may be mentioned on the Doctor News Daily site. Your reliance upon the Materials obtained or used by you is solely at your own risk.
        </p>
        <p>
          Disclaimer of Doctor News Daily can be accessed by clicking HERE.
        </p>
      </section>

      {/* FORCE MAJEURE Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">FORCE MAJEURE</h2>
        <p>
          Neither party to these Terms and Conditions shall be liable for any loss and/or any failure to perform any obligation under these Terms and Conditions due to causes beyond its reasonable anticipation or control including real or potential labour disputes, governmental actions, war or threat of war, sabotage, civil unrest, demonstrations, fire, storm, flooding, explosion, earthquake, provisions or limitations of materials or resources, inability to obtain the relevant authorization, accident and defect in electricity or telecommunication network, among other events.
        </p>
      </section>

      {/* ENTIRE AGREEMENT Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ENTIRE AGREEMENT</h2>
        <p>
          The Terms and Conditions and Privacy Policy, as amended from time to time, constitute the entire agreement between you and Doctor News Daily. If any provision of these Terms and Conditions is considered unlawful, void, or for any reason unenforceable by a court of competent jurisdiction, then that provision shall be deemed severable from these Terms and Conditions and shall not affect the validity and enforceability of any remaining provisions, which shall remain in full force and effect.
        </p>
      </section>

      {/* ABILITY TO ACCEPT TERMS AND CONDITIONS Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ABILITY TO ACCEPT TERMS AND CONDITIONS</h2>
        <p>
          You affirm that you are above eighteen (18) years of age and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms and Conditions, and to abide by and comply with these Terms and Conditions.
        </p>
        <p>
          Doctor News Daily takes children's privacy seriously and always encourages parents and/or guardians to play an active role in their children’s online experience. Doctor News Daily does not knowingly collect any personal information from children below the aforementioned age and if Doctor News Daily learns that Doctor News Daily has inadvertently gathered personal data from children under the aforementioned age, Doctor News Daily shall take all reasonable measures to promptly delete such personal data from Doctor News Daily’ records.
        </p>
      </section>

      {/* ASSIGNMENT Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ASSIGNMENT</h2>
        <p>
          These Terms and Conditions, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Doctor News Daily without restriction.
        </p>
      </section>

      {/* CHANGES TO TERMS AND CONDITIONS Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CHANGES TO TERMS AND CONDITIONS</h2>
        <p>
          We reserve the right, to modify these Terms and Conditions at any time. Any changes to Terms and Conditions will be posted on the Doctor News Daily site and it is your responsibility to review these Terms and Conditions for any changes. Your continued use of the Doctor News Daily site following a posting of changes is your agreement to the changes/amendments and you shall be bound by the current and updated version of these Terms and Conditions. If any changes/amendments to these Terms and Conditions are unacceptable to you, you must discontinue the use of services offered by Doctor News Daily. We reserve the right to suspend or deny, in our sole discretion, your access to all or any portion of the Doctor News Daily site, including for any violation of any provision of these Terms and Conditions. We also reserve the right to change the Doctor News Daily site without notice to you, at any time.
        </p>
      </section>

      {/* WAIVER Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">WAIVER</h2>
        <p>
          No waiver of any terms of these Terms and Conditions shall be deemed a further or continuing waiver of such term or any other term and Doctor News Daily’ failure to assert any right or provision under these Terms and Conditions shall not constitute a waiver of such right or provision.
        </p>
      </section>

      {/* RELATIONSHIP Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">RELATIONSHIP</h2>
        <p>
          None of the provisions of the Terms and Conditions shall be deemed to constitute a partnership or agency between you and Doctor News Daily and you shall have no authority to bind Doctor News Daily in any manner, whatsoever. If you are registering on the Doctor News Daily site as a business entity, you represent that you have the authority to bind the entity to this Agreement.
        </p>
      </section>
    </div>
        </div>
        <div id='privacy-policy' >
        <p className='text-[2rem] text-center font-semibold' >Privacy Policy</p>
         <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Introduction</h2>
        <p className="text-gray-600 mb-2">
          This privacy policy applies to the entire contents of the platform “Doctor News Daily” operated by [Elivista Consortium] [“Doctor News Daily” which may also be referred to hereon in as "we" or "us" or "our" (as applicable)] including, without limitation, or any application or software used to access the platform (“Website” or “Mobile Application”).
        </p>
        <p className="text-gray-600 mb-2">
          Please read the Privacy Policy below carefully before using Doctor News Daily. By using or registering on Doctor News Daily, you accept and agree to the terms of this Privacy Policy. If you do not accept these terms, you will not be allowed to access Doctor News Daily.
        </p>
        <p className="text-gray-600 mb-2">
          The Users are responsible for ensuring that we keep their information current and accurate. The User may update their information by contacting us at [info@doctornewsdaily.com], and we will use reasonable efforts to process any change the User makes; provided, however, that requests to delete information are subject to Medical Dialogue’s internal reporting, processing and retention policies and all applicable legal obligations and existing legislations.
        </p>
        <p className="text-gray-600 mb-2">
          We at Doctor News Daily are committed to preserving the privacy of all visitors to our platform ‘Doctor News Daily’. We are committed to ensuring that all services and activities made available via the platform Doctor News Daily will be provided in a safe and secure online environment. By accepting Medical Dialogue’s Privacy Policy and the Terms & Conditions at the time of registration, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to Medical Dialogue’s Terms & Conditions. This Privacy Policy is effective upon acceptance in registration for new registering users.
        </p>
        <p className="text-gray-600 mb-2">
          Please read the following carefully to understand our views and practices regarding the User Information. The Privacy Policy can be found on our platform at the footer of the page named Privacy Policy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Privacy: Our Commitment</h2>
        <p className="text-gray-600 mb-2">
          At Doctor News Daily, we are extremely proud of our commitment to protect your privacy and recognise that you have a right to know about the information we access or collect about you, how your information is being used by us and what we do to protect your information. Please read the following policy to understand how your personal information shall be treated by Doctor News Daily.
        </p>
        <p className="text-gray-600 mb-2">
          Our commitment towards privacy and protection of User data is based on the principles of lawfulness, transparency, fairness, accuracy, data minimisation, integrity and confidentiality.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">What does this Privacy Policy Cover?</h2>
        <p className="text-gray-600 mb-2">
          This Privacy Policy is part of the Doctor News Daily’ Terms & Conditions and covers the treatment of user information, including personally identifying information, obtained by Doctor News Daily including information obtained when you access the Doctor News Daily’ Site and/or App or any other software provided by Doctor News Daily and any information that you may share through use of the Doctor News Daily Site and/or App.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">1. Introduction</h2>
        <div className="ml-6 mb-4">
          <p className="text-gray-600 mb-2">
            1.1 Doctor News Daily (“Doctor News Daily, we, us”) recognizes that people who use Doctor News Daily’ Service (“you” or “Users”) value their privacy. This Privacy Policy details important information regarding the collection, use and disclosure of User information collected on Doctor News Daily’ website located at and/or the related mobile app (collectively referred to as the "Site"), and any other features, tools, materials, or other services (including co-branded or affiliated services) offered from time to time by Doctor News Daily or its affiliate companies (collectively referred to as the “Service”). Doctor News Daily provides this Privacy Policy to help you make an informed decision about whether to use or continue using the Service.
          </p>
          <p className="text-gray-600 mb-2">
            1.2 This Privacy Policy should be read in conjunction with our Terms & Conditions. By accessing the Site and/or Service, you are consenting to the collection and use of information practices described in this Privacy Policy.
          </p>
          <p className="text-gray-600 mb-2">
            1.3 The User’s use of the Site and/or Service and any information the User may provide through the Site and/or Service remains subject to the terms of this Privacy Policy and our Terms & Conditions, as each may be updated from time to time.
          </p>
          <p className="text-gray-600 mb-2">
            1.4 The User through access of the Site and/or Service and acceptance of this Privacy Policy, hereby warrants and accepts that he/she has given her explicit and unequivocal consent to Doctor News Daily for collection and processing of his/her personal information and that the said collection and processing of his/her personal information is necessary for Doctor News Daily to fulfil their obligations for the provision of services to the said User and the User’s participation on the said platform of Doctor News Daily.
          </p>
          <p className="text-gray-600 mb-2">
            1.5 Any questions, comments or complaints that you might have should be emailed to [info@doctornewsdaily.com].
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">2. Categories of Information Processed</h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">2.1 "Personal Information"</p>
          <p className="text-gray-600 mb-2">
            "Personal Information" means information that is about any individual, or from which any individual is directly or indirectly identifiable.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">2.2 "Process", "Processing" or "Processed"</p>
          <p className="text-gray-600 mb-2">
            "Process", "Processing" or "Processed" means anything that is done with any Personal Information, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">2.3 Categories of Personal Information We May Process:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Personal details: name; username or log in details; password; areas or topics of interest; photograph (if posted by you or another user).</li>
            <li>Demographic information: gender; age/date of birth; nationality; salutation; job title, company info, education, work experience, and other professional information; language preferences.</li>
            <li>Contact details: postal address; phone/mobile number; email address; public social media handles or profiles.</li>
            <li>Consent records: records of consents you may have given (e.g., date, time, method of consent).</li>
            <li>Location information: location data describing the geographic location of your device ("Precise Location Data").</li>
            <li>Employer details: contact info for your employer (if applicable).</li>
            <li>Views and opinions: any feedback or public opinions shared via the Service.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">2.4 Cookies Information:</p>
          <p className="text-gray-600 mb-2">
            When you visit the Doctor News Daily Site, we may send one or more cookies to your device to enable us to uniquely identify your browser.
          </p>
          <p className="text-gray-600 mb-2">
            We use both session and persistent cookies to track navigation and keep your preferences.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">2.5 Log File Information:</p>
          <p className="text-gray-600 mb-2">
            Our servers may automatically record information sent by your device such as web request, IP address, browser type, and URLs.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">2.6 Clear GIFs Information:</p>
          <p className="text-gray-600 mb-2">
            We may use technologies like "clear GIFs" (Web Beacons) to track online usage patterns and email opens.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">2.7 Other Information:</p>
          <p className="text-gray-600 mb-2">
            This may include device IDs, demographic data, and other information collected from users or third-party sources.
          </p>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">1. Information Collection</h2>
        <p className="text-gray-600 mb-2">
          Advertising ID: A unique, user-resettable identification number for advertising associated with a device (e.g., iOS uses the Identifier for Advertising or "IDFA" and Android uses Google Advertising ID).
        </p>
        <p className="text-gray-600 mb-2">
          Device Type, Settings, and Software Used.
        </p>
        <p className="text-gray-600 mb-2">
          Log Files: This may include IP addresses, browser type, ISP referring/exit pages, operating system, date/time stamps, and/or clickstream data, including any clicks on customized links.
        </p>
        <p className="text-gray-600 mb-2">
          Under certain circumstances and depending on applicable law, some of this Other Information may constitute Personal Information. Personal Information together with Other Information is hereinafter referred to as "User Information".
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">2. Purposes for Processing Your Information</h2>
        <p className="text-gray-600 mb-2">
          The purposes for which we may process User Information, subject to applicable law, include:
        </p>
        
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">a) Provision of the Services to You:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Offering contests, chat areas, forums, and communities.</li>
            <li>Offering patient assistance tools.</li>
            <li>Facilitating collaboration between physicians, healthcare professionals, and organizations.</li>
            <li>Verification of identity for healthcare professionals.</li>
            <li>Management of your account and customer support.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">b) Offering and Improving the Services:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Operating and managing the Services for you.</li>
            <li>Providing personalized content.</li>
            <li>Identifying issues with the Services and planning improvements.</li>
            <li>Notifying you of changes to any of our Services.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">c) Verification of Healthcare Professionals:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Verifying users' identity and/or license status using the information you provide.</li>
            <li>We may ask for proof of certification as a healthcare professional.</li>
            <li>If you are not a fully licensed healthcare professional, you may be denied participation in some programs.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">d) Facilitation of Continuing Medical Education:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Provision of medical education credits through educational activities.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">e) Job Listings:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Allowing users to post resumes and apply for healthcare positions.</li>
            <li>Using geographic data for job searches in your area.</li>
          </ul>
        </div>

        {/* Repeat for other purposes as necessary */}

      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">3. Third Party Sites & The User</h2>
        <p className="text-gray-600 mb-2">
          3.1 The Doctor News Daily website and/or the App (collectively referred to as “Site”) may include links to other third-party websites or web pages. Such sites or pages are governed by their respective terms & conditions and privacy policies, which are beyond our control. Once you exit the Doctor News Daily Site and enter a third-party site through the Doctor News Daily Site, use of any information you provide shall be governed by the privacy policy and/or terms and conditions of the operator of the particular third-party site you are visiting. Doctor News Daily shall not, under any circumstances, be responsible for any use of the third-party sites by such User.
        </p>
        <p className="text-gray-600 mb-2">
          3.2 Doctor News Daily refuses to acknowledge or represent the accuracy, completeness, reliability or adequacy of the Site's third-party content. The content, materials, information, services, and products in the Site including text, graphics, and links, are provided "AS IS" and without warranties of any kind, whether expressed or implied. Doctor News Daily is in no way responsible for any content of any linked site or any link contained in a linked site.
        </p>
        <p className="text-gray-600 mb-2">
          3.3 Doctor News Daily disclaims all warranties, expressed and implied with regards to the merchantability and fitness of the Site and/or such third-party sites for a particular purpose. Doctor News Daily also does not guarantee that users shall be able to use the Site and/or such third-party websites without any interruption, which may lead to a loss in continuity.
        </p>
        <p className="text-gray-600 mb-2">
          3.4 Although, Doctor News Daily shall make reasonable efforts to ensure that the Site remains free of viruses or other harmful components, however, Doctor News Daily does not in any way represent or warrant that the Site or the server that makes the Site available shall be free of such harmful components. Use of the services of this Site is at User's own risk and Doctor News Daily shall not be responsible for any servicing costs, repair or correction of the User’s systems.
        </p>
        <p className="text-gray-600 mb-2">
          3.5 Doctor News Daily does not, in any manner whether express or implied, endorse the advertisements hosted on its Site and the Users responding to such advertisements and/or purchasing any products advertised on Doctor News Daily hereby warrant and accept that they shall do so at their own risk.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          3.6 Doctor News Daily Rights
        </h2>
        <p className="text-gray-600 mb-2">
          Doctor News Daily reserves all rights to the assets, content, services, information and products and graphics in the Site except any third-party content.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          4. Use of Information including Confidential Information by Doctor News Daily
        </h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.1</p>
          <p className="text-gray-600 mb-2">
            We may use your personal information to operate and maintain the Site/Service. The information may also be used to provide to you the features and functionality of the Site/Service, including but not limited to the following:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>administering the Site/Service and enabling its use for the User;</li>
            <li>providing you with our products, services including their updates;</li>
            <li>processing and responding to your inquiries or feedback;</li>
            <li>personalizing your use of the Site/Service,</li>
            <li>alerting you to new features, special events, products and services, or certain third-party products or services in which we think you will be interested;</li>
            <li>enforcing the legal terms and conditions that govern your use of the Site/Service;</li>
            <li>keeping the Doctor News Daily’ Site/Service secure;</li>
            <li>dealing with customer inputs, complaints and suggestions; and</li>
            <li>contacting you about your account or profile.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.2</p>
          <p className="text-gray-600 mb-2">
            We may use your information (both personal/private/confidential and non-personal information) to send you marketing and advertising content, including sending you advertising through multiple channels, such as direct mail, email, push notifications and display media. We may send you advertising or content regarding our products and services, or products and services that we market on behalf of another company or any other entity.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.3</p>
          <p className="text-gray-600 mb-2">
            We may use your information to communicate with you about:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>our products and services in which you may be interested provided that you have not requested otherwise;</li>
            <li>newsletters and information for which you have signed up; and</li>
            <li>non-marketing or administrative purposes (such as notifying you of major changes to the Site/Service or for customer service purposes).</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.4</p>
          <p className="text-gray-600 mb-2">
            We use your information (private/confidential or otherwise) to improve the quality and design of our Site/Service and to create new features, promotions, functionality, and services such as by storing, tracking and analyzing user preferences and trends.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.5</p>
          <p className="text-gray-600 mb-2">
            We also use cookies, clear gifs, log file information, and mobile app information such as device identifiers for purposes such as:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>remembering information so that you will not have to re-enter it during your visit or the next time you visit our Site/Service;</li>
            <li>providing custom, personalized content and information;</li>
            <li>monitoring the effectiveness of our marketing campaigns;</li>
            <li>monitoring aggregate metrics such as total number of visitors, pages viewed, etc.; and</li>
            <li>tracking your entries, submissions, and status in promotions, sweepstakes, and contests. You can learn more about how these technologies are used in the Section below, ‘Third Party Advertising and Analytics’.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.6</p>
          <p className="text-gray-600 mb-2">
            We may anonymize, de-identify, or aggregate your information (private/confidential or otherwise) for any legitimate business purposes, including for reporting and research, or advertising. Such anonymized and/or aggregated data does not personally identify you. Sometimes, this information may be used to target more relevant content or offers to you across different devices – for instance, we may provide you with offers and content on your device, based on your web-based activity.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.7</p>
          <p className="text-gray-600 mb-2">
            We may use the information (private/confidential or otherwise) collected from you to verify User compliances with the Terms and Conditions and/or Privacy Policy governing the use of the Site/Service including monitoring private messages sent through our Site/Service private messaging service. Your privacy settings can be used to limit the publication of your information on the Site/Service. You can adjust your privacy settings by contacting us at [info@doctornewsdaily.com].
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">4.8</p>
          <p className="text-gray-600 mb-2">
            We may disclose the information (private/confidential or otherwise) provided to us by the User for any other reason the User provided us with the said information.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          5. When Doctor News Daily Discloses Information including Confidential Information
        </h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.1</p>
          <p className="text-gray-600 mb-2">
            We may use the information we collect or receive from you to process your information in order to provide or operate the Site/Service. For instance, we may use the information for purposes including (but not limited to) billing and accounting, hosting, marketing, promotional and email services, customer and technical support etc. We do not use or share your information with any third parties without taking your consent.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.2</p>
          <p className="text-gray-600 mb-2">
            When you choose to share information with social media services about your activities on Doctor News Daily by, for example, connecting your social media account to our Site/Service, then Doctor News Daily may share your personal information and information about your use of the Site/Service with such social media sites. Please make sure to read the terms and privacy statements of such sites prior to connecting to our Site/Service in this way.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.3</p>
          <p className="text-gray-600 mb-2">
            Where you post personal/private/confidential information about yourself through our Site/Service to public areas of our Site/Service, you acknowledge and agree that this personal information will be publicly available.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.4</p>
          <p className="text-gray-600 mb-2">
            Where you have provided your consent, we may share your personal information with selected third parties for their commercial or marketing use in conjunction with your relationship with Doctor News Daily or as part of a specific program or feature.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.5</p>
          <p className="text-gray-600 mb-2">
            In addition, we may disclose to third parties’ various types of your information for targeted online or mobile advertising, as further described in the Section titled “Third Party, Sharing Advertising and Analytics.”
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.6</p>
          <p className="text-gray-600 mb-2">
            We also may share personal information in other situations with your consent.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.7</p>
          <p className="text-gray-600 mb-2">
            Doctor News Daily also reserves the right to disclose personal information that Doctor News Daily believes, in good faith, is appropriate or necessary to enforce our Terms of Use/Terms & Conditions, take precautions against liability or harm, to investigate, prevent and/or respond to third-party claims or allegations, suspected illegal activities, fraud, to respond to court orders or official requests, to comply with State/Central legal regulations, including but not limited to sharing with appropriate tax authorities, to protect the security or integrity of our Site/Service, to report violations of Doctor News Daily’ eligibility rules to third parties or safety of Doctor News Daily, our users or others.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.8</p>
          <p className="text-gray-600 mb-2">
            If you elect to participate in any promotions, surveys, questionnaires, or other events during your usage of Doctor News Daily, the rules or terms and conditions for those events may indicate that your information will be shared with third parties with your consent. You are advised to review the applicable rules and/or terms and conditions for any promotions, surveys, questionnaires or events.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.9</p>
          <p className="text-gray-600 mb-2">
            In the event that Doctor News Daily is involved in a merger, acquisition, sale, bankruptcy, insolvency, reorganization, receivership, assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors' rights generally, or other change of control, there may be a disclosure of your personal information to another entity related to such event.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">5.10</p>
          <p className="text-gray-600 mb-2">
            In the event ownership or control of the Doctor News Daily Site/Service is acquired by a new owner, your information may be transferred to the new owner as such a transfer may be necessary for the continued operation of the Doctor News Daily Site/Service. Any changes to this Privacy Policy by the new owner shall be notified on the Doctor News Daily Site.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">5.11 Information We Disclose to Third Parties</h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">A)</p>
          <p className="text-gray-600 mb-2">
            We may disclose your User Information to other entities within the Company group, for legitimate business purposes (including operating the Services and providing services to you), in accordance with applicable law. In addition, we may disclose your User Information to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>legal and regulatory authorities, upon request, or for the purposes of reporting any actual or suspected breach of applicable law or regulation;</li>
            <li>outside professional advisors (such as accountants, auditors, or lawyers), subject to binding contractual obligations of confidentiality;</li>
            <li>third party Processors (such as analytic providers; data centers; etc.), located anywhere in the world, subject to the requirements noted below in this Clause 5.11;</li>
            <li>any relevant party, law enforcement agency or court, to the extent necessary for the establishment, exercise or defense of legal rights;</li>
            <li>any relevant third-party provider, where our Services use third party advertising, plugins or content. If you choose to interact with any such advertising, plugins or content, information about your activities on the Services and Channels to provide you targeted advertising based upon your interests may be shared with the relevant third-party provider. If you click or tap on or otherwise interact with an advertisement, the advertiser may assume that you meet its target criteria;</li>
            <li>any sponsors of contests, competitions, sweepstakes, and prize draw, or content offerings, the registration data for such events is to be used by us as part of User Information and may be shared with the sponsor and others, subject to this Privacy Policy and the sponsor’s privacy policy. For contests, competitions, sweepstakes, and prize draws, please read the official rules or terms and conditions carefully before you submit your information;</li>
            <li>to third parties whose practices are not covered by this Privacy Policy (e.g., third party providers of goods and services, marketing and advertising companies and agencies, content publishers and retailers). Under applicable law, we may share Other Information with other parties who already possess your Personal Information in order to enhance their records about you or enhance their ability to provide products and services.</li>
          </ul>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">B)</p>
          <p className="text-gray-600 mb-2">
            For some of our Services, we may make some information, such as the name of our users, their mailing address, phone number, email address and in certain circumstances their employer’s name, company size and other industry data available on a rental or other basis (e.g., sale) to third party providers of goods and services, for example, when such information is provided in connection with certain content available on our websites. Depending on where you reside, when you register for certain Services, we may share the Personal Information you provide with certain advertisers and sponsors.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">C)</p>
          <p className="text-gray-600 mb-2">
            Some of the Services may include websites that Doctor News Daily operates on behalf of third parties (“Licensors”). Where applicable, we may share some or all of your Personal Information with the Licensor; however, this privacy policy does not cover the user of your Personal Information by a Licensor. The privacy practices of Doctor News Daily' Licensors may differ from this policy and we encourage you to contact those third parties directly if you have questions regarding their use of your Personal Information. When you use a co-branded service (a service operated with a partner of Doctor News Daily) or register or otherwise provide information on a co-branded site, where applicable, we may pass the collected information back to that partner, which may include third party service providers whose services are embedded into and/or appear within the Services.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">D)</p>
          <p className="text-gray-600 mb-2">
            With respect to surveys, in the event that responses are publicly disclosed, users will be notified at the time they take the survey. Otherwise we will disclose only aggregate information regarding its users’ responses in surveys to other participants in the survey. Where surveys allow users to submit written comments, and where Doctor News Daily advises users of the possibility of such disclosure at the time, they take the survey, Doctor News Daily reserves the right to disclose any information provided by users, provided that no User Information identifying a specific user is disclosed.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">E)</p>
          <p className="text-gray-600 mb-2">
            Doctor News Daily and some of our advertisers may use third party advertising service companies to serve advertisements and perform related services when you interact with the Services. Often, these third-party advertising companies employ cookies and other technologies to measure the effectiveness of website, app and email advertisements and to create a record of interaction with our content that they use in conjunction with their advertising which appears on other sites or applications, or for reporting website traffic, app use, statistics, advertisement data and/or other activities on the Services. We also engage third party providers to assist with the segmentation of this data.
          </p>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">5.11 Information We Disclose to Third Parties</h2>
        
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">F)</p>
          <p className="text-gray-600 mb-2">
            We may also sell or transfer Online Data to certain third parties such as advertisers who will use this data to serve ads that they believe are relevant to your interests, and who agree to maintain the confidentiality of this information. Some of these third parties may combine the Online Data with their own data about you to form a more detailed picture.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">G)</p>
          <p className="text-gray-600 mb-2">
            We may engage third party providers to assist with the collection, storage and segmentation of Online Data and the providers are required to maintain the confidentiality of this information. These third-party providers may collect User Information from our Services for their own purposes, such as to monitor fraud around the web.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">H)</p>
          <p className="text-gray-600 mb-2">
            We may also engage third parties for the purpose of recognizing our users and delivering interest-based content and advertisements to them. We may share your User Information with our partners such as your name, postal address, email, or another identifier. Our partners may also: (i) collect information directly from your device, such as your IP address, device ID, advertising ID, and information about your browser or operating system; (ii) combine User Information about you received from Doctor News Daily with information about you from other sites or services; and (iii) place or recognize a unique cookie on your browser.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">I)</p>
          <p className="text-gray-600 mb-2">
            If we engage a third-party processor to process your User Information, the Processor will be subject to binding contractual obligations to: (i) only process the User Information in accordance with our prior written instructions; and (ii) use measures to protect the confidentiality and security of the User Information; together with any additional requirements under applicable law.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">J)</p>
          <p className="text-gray-600 mb-2">
            The Services contain links to other sites or partners whose information practices may be different from ours. You should consult the privacy policy of these third parties to learn how your privacy is protected.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">6. Lawful Basis for Processing User Information</h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">6.1</p>
          <p className="text-gray-600 mb-2">
            In processing your User Information in connection with the purposes set out in this Privacy Policy, we may rely on one or more of the following legal bases, depending on the circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Consent:</strong> We may Process your User Information where we have obtained your prior, express consent to the Processing (this legal basis is only used in relation to processing that is entirely voluntary – it is not used for processing that is necessary or obligatory in any way);</li>
            <li><strong>Contractual necessity:</strong> We may Process your User Information where the processing is necessary for connection with any contract that you may enter into with us;</li>
            <li><strong>Compliance with applicable law:</strong> We may process your User Information where the Processing is required by applicable law;</li>
            <li><strong>Vital interests:</strong> We may process your User Information where the processing is necessary to protect the vital interests of any individual; or</li>
            <li><strong>Legitimate interests:</strong> We may process your User Information where we have a legitimate interest in carrying out the processing for the purpose of managing, operating or promoting our business, and that legitimate interest is not overridden by your interests, fundamental rights, or freedoms.</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">7. Customer Support</h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">7.1</p>
          <p className="text-gray-600 mb-2">
            All telephone conversations from the Users to our Customer Support Centre may be recorded both to assist us in training and in quality management, and to allow for the speedy resolution of the queries.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">7.2</p>
          <p className="text-gray-600 mb-2">
            All communications with Doctor News Daily and its Customer Support shall be conducted in the parliamentary language (a language which is not offensive and/or abusive). Doctor News Daily prevents and prohibits any such use of offensive and/or abusive language and strictest of actions shall be taken against the User who uses such offensive and/or abusive language including but not limited to suspension and/or termination of the User Account.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">8. User’s Choices</h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">8.1</p>
          <p className="text-gray-600 mb-2">
            Doctor News Daily will process your personal information in accordance with this Privacy Policy, and as part of that Doctor News Daily provides you with certain choices about how we process your personal information.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">8.2</p>
          <p className="text-gray-600 mb-2">
            You can access and update certain personal information Doctor News Daily holds about you at any time by logging into your account via the Site/Service. You can update your marketing preferences and whether or not you would like us to send you newsletters in your account. You can also unsubscribe to marketing emails and newsletters by using the 'unsubscribe' feature in the communication.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">8.3</p>
          <p className="text-gray-600 mb-2">
            We may occasionally send display media to you, in a targeted way, whether through web or mobile browsers or mobile applications. You may opt out of many third parties that support and send this type of targeting advertising and you may learn more about this type of advertising in the below Section titled “Third Party Advertising and Analytics.” You may opt out of tracking for mobile advertising through the settings on most smartphones, and you may learn more about these settings through those mobile device platforms, i.e., Google (https://support.google.com/ads/answer/2662922?hl=en) and Apple (https://support.apple.com/en-in/ht202074). [Please note that these companies may either change the way these settings operate, the content or the availability of these pages].
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">8.4</p>
          <p className="text-gray-600 mb-2">
            We may occasionally send you push notifications to your device. You can turn off certain push notifications in the account settings of your Doctor News Daily Account. You can also turn off push notifications specific to our Service in the settings on your mobile device.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">9. Third-Party Sharing, Advertising, and Analytics</h2>
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">9.1</p>
          <p className="text-gray-600 mb-2">
            Certain ads that may appear on our Site/Service are delivered by our advertising partners. Our advertising partners may use cookies and other similar technologies, often in conjunction with unique (anonymous) cookie identifiers, to collect data about your activities and interests, including the technologies described above. Some of these partners may use mobile device identifiers, such as Apple IDFAs and Google/Android Advertising IDs. Doing this allows the ad companies to recognize your computer or device each time they send you an online or mobile advertisement. In this way, the ad companies may compile information about where you, or others who are using your computer or device, saw their advertisements and measure your interaction with each advertisement. This information allows advertisement companies to deliver targeted advertisements that may be of increased interest to you, both on our Site/Service and elsewhere online. Just as these technologies may be used to target ads on our websites and apps, we, or our advertising partners, may use these same technologies and data points (e.g., mobile identifiers, cookie identifiers, location-based data), through our Site/Service or through other services, to target advertising (for ourselves or other companies) on other sites or mobile apps. Sometimes, these identifiers may be derived from a hashed or encrypted version of personal information such as your email address. We may use this information to measure the performance of our advertising as well, for instance, to evaluate which ads or content our users prefer, or which are most effective. In addition, sometimes we or an advertising partner may tailor advertising to you across different devices.
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">9.2</p>
          <p className="text-gray-600 mb-2">
            Doctor News Daily may disclose the information it collects about the User to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>to its service providers, to its affiliates, sponsors, suppliers and others who help provide the platform to the User;</li>
            <li>to licensors, activity and event partners and other third parties for their own marketing purposes, such as to provide information to the User about their new developments, special events, programs, services, activities, products, attractions, promotions and other important information;</li>
            <li>third parties to provide analytics or to confirm/update information provided by the User;</li>
            <li>third parties in the event of any reorganization, merger, sale, joint venture, assignment, transfer or disposition of all or any portion of Doctor News Daily’ business or other operations (including without limitation in connection with bankruptcy or any similar proceedings); and</li>
            <li>or as otherwise authorized by the User.</li>
          </ul>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">10.3 Information Provided to Users</h2>
        
        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">c)</p>
          <p className="text-gray-600 mb-2">
            The recipients or categories of recipients of the personal data, if any;
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">d)</p>
          <p className="text-gray-600 mb-2">
            Categories of personal data concerned;
          </p>
        </div>

        <div className="ml-6 mb-4">
          <p className="font-semibold text-gray-800 mb-2">e)</p>
          <p className="text-gray-600 mb-2">
            Where applicable, the fact that Doctor News Daily intends to transfer personal data to a third party, third country or international organization.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.3.2 Additional Information</h3>
        <div className="ml-6 mb-4">
          <p className="text-gray-600 mb-2">
            In addition to the information referred to in Clause 10.3.1, Doctor News Daily shall, at the time when personal data are obtained, provide the User with the following further information necessary to ensure fair and transparent processing:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>a) The period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period;</li>
            <li>b) Where the processing is based or would be carried out;</li>
            <li>c) The existence of the User’s right to request from Doctor News Daily access to and rectification or erasure of personal data or restriction of processing concerning the User or to object to processing;</li>
            <li>d) The existence of the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;</li>
            <li>e) Whether the provision of personal data is a statutory or contractual requirement, or a requirement necessary to enter into a contract, as well as whether the User is obliged to provide the personal data and the possible consequences of failure to provide such data.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.3.3 Further Processing</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Where Doctor News Daily intends to further process the personal data for a purpose other than that for which the personal data were collected, Doctor News Daily shall provide the User prior to that further processing with information on that other purpose and with any relevant further information as referred to in Clause 10.3.2.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.3.4 Collection of Information</h3>
        <p className="ml-6 text-gray-600 mb-2">
          The above-stated provisions under Clauses 10.3.1, 10.3.2, and 10.3.3 shall also apply where Doctor News Daily intends to collect information from the User.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">10.4 Right to Access to Data</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.4.1 User Rights</h3>
        <div className="ml-6 mb-4">
          <p className="text-gray-600 mb-2">
            The User shall have the right to obtain from Doctor News Daily confirmation as to whether or not personal data concerning him or her are being processed, and, where that is the case, access to the personal data and the following information:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>a) The purposes of the processing;</li>
            <li>b) The categories of personal data concerned;</li>
            <li>c) The recipients or categories of recipient to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organizations;</li>
            <li>d) Where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;</li>
            <li>e) The existence of the right to request from Doctor News Daily rectification or erasure of personal data or restriction of processing of personal data concerning the User or to object to such processing;</li>
            <li>f) Where the personal data are not collected from the User, any available information as to their source;</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.4.2 Transfers to Third Parties</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Where personal data are transferred to a third party, third country, or to an international organization, the User shall have the right to be informed of the appropriate safeguards implemented by Doctor News Daily.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.4.3 Copies of Personal Data</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Upon request by the User, Doctor News Daily shall provide a copy of the personal data undergoing processing. For any further copies requested by the User, Doctor News Daily may charge a reasonable fee based on administrative costs. Where the User makes the request by electronic means, and unless otherwise requested by the User, the information shall be provided in a commonly used electronic form.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">10.5 Right to Rectification</h2>
        <p className="ml-6 text-gray-600 mb-2">
          The User shall have the right to obtain from Doctor News Daily without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the User shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">10.6 Right to Erasure (Right to be Forgotten)</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.6.1 Grounds for Erasure</h3>
        <div className="ml-6 mb-4">
          <p className="text-gray-600 mb-2">
            The User shall have the right to obtain from Doctor News Daily the erasure of personal data concerning him or her without undue delay and Doctor News Daily shall have the obligation to erase personal data without undue delay where one of the following grounds applies:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>a) The personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;</li>
            <li>b) The User withdraws consent on which the processing is based and where there is no other legal ground for the processing;</li>
            <li>c) The User objects to the processing pursuant to Clause 10.9 and there are no overriding legitimate grounds for the processing;</li>
            <li>d) The personal data has been unlawfully processed;</li>
            <li>e) The personal data have to be erased for compliance with a legal obligation under any law to which Doctor News Daily is subject.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.6.2 Exceptions to Erasure</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Sub-clauses 10.6.1 and 10.6.2 shall not apply to the extent that processing is necessary:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>a) For exercising the right of freedom of expression and information;</li>
          <li>b) For compliance with a legal obligation which requires processing by any law to which Doctor News Daily is subject or for the performance of a task carried out in the public interest or in the exercise of official authority vested in Doctor News Daily;</li>
          <li>c) For the establishment, exercise or defense of legal claims.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">10.7 Right to Restriction of Processing</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.7.1 Grounds for Restriction</h3>
        <div className="ml-6 mb-4">
          <p className="text-gray-600 mb-2">
            The User shall have the right to obtain from Doctor News Daily restriction of processing where one of the following applies:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>a) The accuracy of the personal data is contested by the User, for a period enabling Doctor News Daily to verify the accuracy of the personal data;</li>
            <li>b) The processing is unlawful and the User opposes the erasure of the personal data and requests the restriction of their use instead;</li>
            <li>c) Doctor News Daily no longer needs the personal data for the purposes of the processing, but they are required by the User for the establishment, exercise or defence of legal claims;</li>
            <li>d) The User has objected to processing pursuant to Clause 10.9 of this Privacy Policy pending the verification whether the legitimate grounds of Doctor News Daily override those of the User.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.7.2 Processing During Restriction</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Where processing has been restricted under Sub-Clause 10.7.1 as stated above, such personal data shall, with the exception of storage, only be processed with the User's consent or for the establishment, exercise or defence of legal claims or for the protection of the rights.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">10.8 Right to Data Portability</h2>
        <p className="ml-6 text-gray-600 mb-2">
          The User shall have the right to receive the personal data concerning him or her, which he or she has provided to Doctor News Daily, in a structured, commonly used and machine-readable format and have the right to transmit those data to another entity/body without hindrance from Doctor News Daily.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">10.9 Right to Object</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.9.1 Right to Object to Processing</h3>
        <div className="ml-6 mb-4">
          <p className="text-gray-600 mb-2">
            The User shall have the right to object, on grounds relating to his or her particular situation, at any time to processing of personal data concerning him or her including profiling. Doctor News Daily shall no longer process the personal data unless Doctor News Daily demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the User or for the establishment, exercise or defence of legal claims.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.9.2 Direct Marketing</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Where personal data are processed for direct marketing purposes, the User shall have the right to object at any time to processing of personal data concerning him or her for such marketing, which includes profiling to the extent that it is related to such direct marketing.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">10.9.3 Processing After Objection</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Where the User objects to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">11. Information Security</h2>
        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">11.1 Commitment to Security</h3>
        <p className="ml-6 text-gray-600 mb-2">
          We are committed to protecting the security of your personal information. Protection of the User Information, including the registration details or any other information the User provides to us, is a priority for us. We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">11.2 Encryption</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Any personal information which identifies the User will be encrypted at all times whilst in transit over the internet. The technology used by us encrypts any information sent by the User on secure pages. Our server then reads the information using a private key. This means that your information, be it any payment information provided to us or any other personal details, is turned into a code that can only be decoded with the private key or password.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">11.3 Security Measures</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Whilst neither we, nor any other organization, can guarantee the security of information processed online, we have appropriate security measures in place to protect your personal information. Example: we store the personal information you provide on computer systems with limited access that are located in facilities to which access is limited.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">11.4 Identity Verification</h3>
        <p className="ml-6 text-gray-600 mb-2">
          To further protect your privacy and security, we reserve the right to take reasonable steps (such as requesting your password) to verify your identity before granting you profile access or making corrections.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">11.5 Password Protection</h3>
        <p className="ml-6 text-gray-600 mb-2">
          Additionally, you should ensure your password is kept secret at all times. You will be responsible for maintaining the secrecy of your password and account information.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">18. Language</h2>
        <p className="text-gray-600 mb-4">
          All communications between the User and Doctor News Daily and/or any other entity of Doctor News Daily shall be communicated in written form vide Electronic Mail (E-Mail) and in either English or Hindi language. Further, all communications between the User and the Customer Support shall also be conducted in either English or Hindi language.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Date Last Modified</h2>
        <p className="text-gray-600 mb-4">
          This Privacy Policy was last modified on [Oct 11th 2019].
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Choices</h2>
        <p className="text-gray-600 mb-4">
          You may, of course, decline to submit Personally Identifiable Information through Doctor News Daily in which case Doctor News Daily may not be able to provide certain services to you. If you do not agree with our Privacy Policy or Terms & Conditions, the Users/visitors/participants are advised to not access and/or uninstall the Doctor News Daily Site/Service respectively. The Users are also requested to delete their account from the Doctor News Daily platform. Your continued usage of the Doctor News Daily Site/Service shall signify your assent to and acceptance of our Privacy Policy and Terms & Conditions (including any amendment thereof).
        </p>
        <p className="text-gray-600 mb-4">
          To protect your privacy and security, we take reasonable steps (such as SMS authentication) to verify your identity before registering your contact number (mobile phone number) and granting you access to the Doctor News Daily Site/Service.
        </p>
      </section>
        </div>
        <div id='advertising-policy' >
        <p className='text-[2rem] text-center font-semibold' >Advertising Policy</p>
        <section className="mb-12">
      
        <p className="text-gray-600 mb-4">
          Please read the Advertising Policy below carefully. By using or registering on Doctor News Daily, you accept and agree to the terms of this Advertising Policy. All advertisement on the website is subject to our advertising policy.
        </p>
        <p className="text-gray-600 mb-4">
          To keep our business going including daily operations that are incidental to running the website as well as our staffing expenses, Elivista Consortium which owns and operations Doctor News Daily including doctornewsdaily.com and all its subdomains (“Doctor News Daily” or “we”) regularly accepts advertising from third parties (“Advertising”), which may include third party banners, badges, contextual advertising and content (“sponsored content”) created or provided by an Advertiser (collectively referred to as "Advertisements" or "Advertising").
        </p>
        <p className="text-gray-600 mb-4">
          In addition, as used in this policy, the terms "Advertising" and "Advertisements" include third party banners, links, microsites (either created by us or the advertiser following our guidelines), native advertisements and other content provided by or on behalf of Advertisers.
        </p>
        <p className="text-gray-600 mb-4">
          The Advertiser is responsible for the accuracy and objectivity of their Advertising. These advertisements are clearly distinguished by the term “advertisement” or “adv” used in cases of banners, modules and microsites. The sponsored content can also be clearly differentiated from our editorial content by the use of the words "Advertorial" or "From The Industry" or "partner content", "sponsored" or a similar designation indicating that the Advertising is being provided by or on behalf of an Advertiser. This would be done in the source section of such articles. Our advertising policy applies to the entire contents of the platform “Doctor News Daily” [“Doctor News Daily” which may also be referred to hereon in as "we" or "us" or "our" (as applicable)] including, without limitation, www.doctornewsdaily.com or any application or software used to access the platform.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily contains advertisements, promotions and sponsored areas that are sold by us. These advertising spaces are offered by Doctor News Daily for commercial interest and shall be distinguished from independently developed editorial content. Advertisements that appear on Doctor News Daily may direct Users to third-party websites that are not controlled by Doctor News Daily. Queries regarding advertising on Doctor News Daily may be addressed to marketing@doctornewsdaily.com. Please note that all advertisements shall be strictly subject to the Advertising Guidelines and the inexhaustive list of Prohibited Advertisements in this Policy. Further, any Applicable Laws (in accordance with Terms of Use and Privacy Policy including but not limited to Advertising and Standards Council of India Code) force in the territory of India, shall be taken into consideration when an advertisement request is considered.
        </p>
        <p className="text-gray-600 mb-4">
          Display of an advertisement does not imply an endorsement of the advertised products or services, nor does it imply that we performed due diligence on such products or services. Any periodic updates to this Advertising Policy will be posted here.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Doctor News Daily Advertising Guidelines</h3>
        <p className="text-gray-600 mb-4">
          Doctor News Daily maintains a strong distinction between our Editorial Content and Advertisements. Our website hosts advertising banners/creatives/microsites. These advertisements can either be Google Ads or relevant Banner Advertisements from our industry partners including pharmaceutical, biotech and medical device companies, healthcare organisations, advertising agencies, publishers and other advertisers wanting to reach out to our readers of Doctor News Daily. Such Advertisement banners are clearly distinguished by the word ‘Advertisement’ or "Adv." on top of these banners/creatives/microsites. It is imperative for a relationship with Doctor News Daily, that all advertisers have to follow our advertising guidelines mentioned below. All sponsored articles/content shall maintain are clearly marked by the word "Advertorial" or "Sponsored", or "From The Industry" or a similar designation indicating that the Advertising content is being provided by or on behalf of an Advertiser. This would be done in the source section of such articles.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Advertising Guidelines</h3>
        <ul className="list-inside list-disc text-gray-600">
          <li>Advertisers shall ensure truthfulness and honesty of representations and claims made by advertisements to safeguard against misleading advertisements.</li>
          <li>Advertisers shall ensure that advertisements are not offensive and do not contain anything indecent, vulgar or repulsive that is likely, in the light of generally prevailing standards of decency and propriety, to cause grave or widespread offence;</li>
          <li>Advertisers shall ensure that advertisements be competitive and are not denigrating to other products.</li>
          <li>Advertisers shall safeguard against the promotion of products that are regarded as hazardous or harmful to society or individuals, particularly minors, to a degree or of a type that is unacceptable to society at large;</li>
          <li>Advertisers shall ensure that advertisements observe fairness in competition so that the consumers’ need to be informed on choices in the marketplace and the standards of generally accepted competitive behaviour in business are both served;</li>
          <li>Medical Practitioners are required to strictly follow all ethical codes and advertising codes as are applicable to medical practitioners and ensure that advertisements are only related to commencement of practice, changes in addresses, absences, disposal of practice and the like;</li>
          <li>Medical Institutions shall similarly be allowed only to advertise the name of the institution, type of patients admitted, type of training and other facilities offered and the fees.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Prohibited Advertisements</h3>
        <ul className="list-inside list-disc text-gray-600">
          <li>Advertisements whose subject is related/ancillary to cigarettes and other tobacco products including electronic cigarettes, vapes or any other similar product, either directly or indirectly;</li>
          <li>Advertisements related to magical remedies of diseases and/or disorders;</li>
          <li>Advertisements related to pre-natal determination of sex;</li>
          <li>Physician advertisements that intend to solicit patients or affix clinical practice endorsements;</li>
          <li>Advertisements that seek to promote any form of obscenity or vulgarity including any ancillary relation to pornography of any sort;</li>
          <li>Advertisements that directly or indirectly relate to any form of the occult or psychic services;</li>
          <li>Advertisements that contain any indecent representation of women in any form;</li>
          <li>Advertisements pertaining to sexual services of any form;</li>
          <li>Advertisements that may be construed to be deceptive or misleading under any applicable law in India;</li>
          <li>Advertisements in the Fact-Checking domain;</li>
        </ul>
      </section>

      <section className="mb-12">
        <p className="text-gray-600 mb-4">
          A click on an Advertisement may only link the end user to the Advertiser's site or to relevant sponsored content area on a Doctor News Daily Property. Doctor News Daily reserves the right to decide at any time in its sole discretion whether it will accept, reject, cancel, or remove Advertising from the Doctor News Daily Network.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily cannot provide any assurances that Advertisements will perform without error on all platforms, including websites and mobile applications. It is the Advertiser's responsibility to comply with all domestic and foreign laws and regulations applicable to its Advertising within the Doctor News Daily Network (and to include all legally required legends, disclosures, and statements in such Advertising), including without limitation the current Government of India guidelines if any on the matter for Direct to Physician (DTP) and Direct to Consumer (DTC) advertising.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily will not monitor compliance with such laws and regulations. However, Doctor News Daily reserves the right to review all Advertising for compliance with applicable laws and regulations and, if Doctor News Daily becomes aware of any breach or potential breach of any applicable law or regulation or of these guidelines, Doctor News Daily may remove the Advertising from the Doctor News Daily Network.
        </p>
        <p className="text-gray-600 mb-4">
          No Advertising on the Doctor News Daily Network shall include any pixels, tags, flash containers or any other type of information collection software code (any such pixel, tag, code, or device a "Pixel") or shall place any beacons, cookies or other information collection devices on the browsers of users of the Doctor News Daily Network unless expressly approved in writing by Doctor News Daily.
        </p>
        <p className="text-gray-600 mb-4">
          If Doctor News Daily approves the inclusion of a Pixel in an Advertisement, then unless and only to the extent that such approval contains an express exception, (i) Advertiser may not use such Pixel to collect any personally-identifiable information (PII) with respect to any Doctor News Daily user, (ii) no such Pixel can be flash or object-based, (iii) the Pixel can be blocked and any cookie placed can be deleted by user browser settings, (iv) Advertiser will not link any non-PII that it collects to any PII that it may have from any other source and (v) Advertiser will not update any existing profile or create any profile in its database based on any data collected on the Doctor News Daily site, including the fact that someone is a Doctor News Daily user or any information derived from the information in the referring URL.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily retains the exclusive right to determine how any and all search results for specific information by keyword or topic are displayed on a Doctor News Daily Property based on Doctor News Daily delivered search results.
        </p>
        <p className="text-gray-600 mb-4">
          Content listed in search results is displayed with its source, e.g., "Doctor News Daily News" or "Journal Article." If Advertising appears in the search results, it is labeled as such. In addition, Doctor News Daily provides a separate area on the search results page of certain Doctor News Daily Consumer Properties which only display Advertising.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Further Queries</h3>
        <p className="text-gray-600 mb-4">
          As described in the "Ads by Google" hyperlink in the Ads by Google section on applicable Doctor News Daily Consumer Properties Search pages, these "Ads by Google" are Advertisements that have been purchased by companies that want to have links to their websites appear adjacent to search results in response to specific terms.
        </p>
        <p className="text-gray-600 mb-4">
          For any further queries or advertisement requests, please contact us at <a href="mailto:marketing@doctornewsdaily.com" className="text-blue-500">marketing@doctornewsdaily.com</a> or fill out the form on this page.
        </p>
      </section>
        </div>
        <div id='disclaimer' >
        <p className='text-[2rem] text-center font-semibold' >Disclaimer</p>
        <section className="mb-12">
        <p className="text-gray-600 mb-4">
          This site (doctornewsdaily.com) (and its related sub-domains-speciality.doctornewsdaily.com, business.doctornewsdaily.com, education.doctornewsdaily.com) collectively referred to as “Doctor News Daily” contain medical news and is intended for Healthcare Professionals only and no information on this website should be constituted as medical/diagnostic advice /healthcare advice/medical prescription.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily and its sub-domains are owned and operated by Elivista Consortium (herein referred to as Elivista) duly incorporated in terms of the laws of India. Elivista is the sole owner of the site (doctornewsdaily.com and its related sub-domains). Elivista reserves the right to amend, modify, update, substitute, suspend or delete any information contained herein, including the information posted in any public area, blog, app or chat room.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily and its sub-domains contain medical and pharmaceutical news and data, provided on an ‘as is’ basis strictly for general information purposes only. Doctor News Daily is a website that is primarily intended and developed for healthcare professionals, but which currently does not prohibit the general public from accessing information on it. The materials contained within this website do not constitute medical or pharmaceutical advice/medical prescription, which should be sought from qualified medical and pharmaceutical advisers.
        </p>
        <p className="text-gray-600 mb-4">
          The materials and content contained and/or published on Doctor News Daily does not and/or is not intended to constitute and/or be a substitute/replacement for professional medical/pharmaceutical advice, diagnosis, or treatment. The users of Doctor News Daily are hereby advised to always seek the advice of your physician or other qualified medical and/or pharmaceutical practitioner/doctor/provider with any questions you may have regarding a medical condition. The users are hereby advised to not disregard, avoid or delay obtaining medical or health-related advice from your health-care professional because of something you may have read on the site and/or sub-domains. The use of any information provided on the site or sub-domains shall be solely at user’s own risk.
        </p>
        <p className="text-gray-600 mb-4">
          Nothing stated or posted on Doctor News Daily is intended to be, and must not be taken to be, the practice of medicine or counselling care. For the purposes of this Disclaimer, the practice of medicine and counselling includes, without limitation, psychiatry, psychology, psychotherapy, the practice of pharmacy, nutrition and fitness counselling or providing health care treatment, instructions, diagnosis, prognosis or advice.
        </p>
        <p className="text-gray-600 mb-4">
          The information we post is a result of our journalists’/writer’s/reporter’s/editor’s endeavour in understanding the happenings of healthcare industry in India, or medical news coming out of leading journals and medical conferences across the world. We at Doctor News Daily, do not answer any medical questions of any kind, in any format, nor any questions relating to medications. Any views expressed by third parties in the Opinions Forum/comments section of Doctor News Daily do not reflect the opinions, in any way, of Doctor News Daily, its parent company or its staff. Descriptions of, or references to, products or publications does not imply endorsement of that product or publication. Developments in medical research may impact the health, fitness and nutritional topics discussed on Doctor News Daily and no assurances can be given that the information contained on Doctor News Daily shall always include the most recent findings or developments with respect to the particular material. We do not recommend or endorse any specific tests, physicians, clinics, procedures, opinions, products or other information that may appear on Doctor News Daily. Doctor News Daily may contain health- or medical-related materials that are sexually explicit. If you find these materials offensive, you may not want to use Doctor News Daily.
        </p>
      </section>

      <section className="mb-12">
        <p className="text-gray-600 mb-4">
          Doctor News Daily contains links and forms that link to external web sites. In no event shall, we shall be responsible for the content, accuracy or opinions expressed in these web sites. Such sites or pages are governed by their respective terms & conditions and privacy policies, which are beyond our control. These web sites are not monitored or checked for reliability, adequacy, accuracy or completeness by us. Inclusion of web sites linked to via forms and links in our site/sub-domains does not imply approval or endorsement of the linked web site by us. If you decide to leave our web site/sub-domain and access these third-party sites, you do so at your own risk. Once you exit Doctor News Daily and enter a third-party site through Doctor News Daily, use of any information you provide shall be governed by the privacy policy and/or terms and conditions of the operator of the particular third-party site you are visiting. Doctor News Daily shall not, under any circumstances, be responsible for any use of third-party site by such User.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily does contain some medical cases with before and after images. "The photos illustrating ours before/after clinical cases show consenting persons and the same patients appear, respectively, for the before/after result. These photos have not been retouched. We expressly draw your attention to the fact that the observed result is specific to the person concerned and that an identical result cannot be expected for another person, because of the individuality of each person."
        </p>
      </section>

      <section className="mb-12">
        <p className="text-gray-600 mb-4">
          The content, materials, information, services and products on Doctor News Daily including text, graphics and links, are provided "AS IS" and without warranties of any kind, whether expressed or implied. Doctor News Daily is in no way responsible for any content of any linked site or any link contained in a linked site.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily disclaims all warranties, expressed and implied with regards to the merchantability and fitness of its site and/or sub-domains and/or third-party sites for a particular purpose. Doctor News Daily also does not guarantee that users shall be able to use the site and/or sub-domains and/or such third-party websites without any interruption, which may lead to loss in continuity.
        </p>
        <p className="text-gray-600 mb-4">
          Although, Doctor News Daily shall make reasonable efforts to ensure that the site and sub-domains remain free of viruses or other harmful components, however, Doctor News Daily does not in any way represent or warrant that the site and/or sub-domains and/or the server that makes the site/sub-domains available shall be free of such harmful components. Use of the services of this site/sub-domains is at user's own risk and Doctor News Daily shall not be responsible for any servicing costs, repair or correction of the user’s systems.
        </p>
      </section>

      <section className="mb-12">
        <p className="text-gray-600 mb-4">
          Doctor News Daily does not, in any manner whether express or implied, endorse the advertisements hosted on its site and/or sub-domains and the users responding to such advertisements and/or purchasing any products advertised on Doctor News Daily hereby warrant and accept that they shall do so at their own risk.
        </p>
        <p className="text-gray-600 mb-4">
          Doctor News Daily reserves all rights to the assets, content, services, information and products and graphics in the site and sub-domains except any third-party content.
        </p>
      </section>

      <section>
        <p className="text-gray-600 mb-4">
          We do take contributions from leading healthcare professionals across the country, in the form of blogs and/or opinions. However, the opinions expressed in these blogs and/or articles are the personal opinions of the author and shall, in no way, be construed as the opinion and/or position and/or advice of Doctor News Daily. None of these blogs and/or articles should be construed as medical or pharmaceutical advice and users of Doctor News Daily are hereby advised to always seek the advice of your physician or other qualified medical and/or pharmaceutical practitioner/doctor/provider with any questions you may have regarding a medical condition.
        </p>
      </section>
        </div>
          
       </div>
    </>
  );
}
