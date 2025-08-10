import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Privacy Policy | Wildopedia',
    description: 'Read the privacy policy for Wildopedia.',
};

const PrivacyPolicyPage = () => {
  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-3xl font-bold font-headline mb-6 text-center">Privacy Policy</h1>
        <p>
          Your privacy is important to us. It is Wildopedia&apos;s policy to respect your privacy regarding any information we may collect from you across our website. This policy outlines how we handle your personal data and your rights concerning that data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
        <p>
          We only retain collected information for as long as necessary to provide you with your requested service. Any data we store is protected within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. Sharing of Information</h2>
        <p>
          We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Links to Other Sites</h2>
        <p>
          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        </p>

        <p>
          You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of the services you desire.
        </p>
        <p>
          Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
        </p>
        <p>This policy is effective as of 1 August 2025.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
