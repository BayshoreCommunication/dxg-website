'use server';
export const handleFormSubmit = async (formData: FormData) => {
  // add dynamic form data here

  const secretText1 =
    'fe60e2ca4e34fc52eb966aceff318d0ac448beb1cc75bbac271f0e4574ccfc52';
  const secretText2 =
    'a94e27c12556e10d529b3ca9940e595909702fc325a13ed8694bc9c2da8c508c8d9189f798c8093bdb33b5cd9b1c4777';
  const leadCampaign = 'TGVhZHM=';
  const returnUrl = 'https://dxg-agency.com/thank-you';

  const LeadSource = 'Online-Store';

  formData.append('xnQsjsdp', secretText1);
  formData.append('xmIwtLD', secretText2);
  formData.append('actionType', leadCampaign);
  formData.append('returnURL', returnUrl);
  formData.append('Lead Source', LeadSource);

  try {
    const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
      method: 'POST',
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();

    console.log(data);
    return 'success';
  } catch (error) {
    return 'error';
  }
};
