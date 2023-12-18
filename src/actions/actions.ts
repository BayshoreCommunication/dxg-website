'use server';
import { SITECONFIG } from '../config/site';

export const handleFormSubmit = async (formData: FormData) => {
  formData.append('xnQsjsdp', SITECONFIG.contact.xnQsjsdp);
  formData.append('xmIwtLD', SITECONFIG.contact.xmIwtLD);
  formData.append('actionType', SITECONFIG.contact.leadCampaign);
  formData.append('returnURL', SITECONFIG.contact.returnUrl);
  formData.append('Lead Source', SITECONFIG.contact.leadSource);

  try {
    await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
      method: 'POST',
      body: formData,
    });
    return 'success';
  } catch (error) {
    return 'error';
  }
};
