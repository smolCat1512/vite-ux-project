import NFCCWireframe from "../../assets/nfcc_images/NFCCWireframe1.png";
import NFCCAgencies from "../../assets/nfcc_images/NFCC_Agencies.png";
import NFCCBilling from "../../assets/nfcc_images/NFCC_Billing.png";
import NFCCHolidays from "../../assets/nfcc_images/NFCC_Holidays.png";
import NFCCInsights from "../../assets/nfcc_images/NFCC_Insights.png";
import NFCCManageServices1 from "../../assets/nfcc_images/NFCC_ManageServices01.png";
import NFCCManageServices2 from "../../assets/nfcc_images/NFCC_ManageServices02.png";
import NFCCProfile from "../../assets/nfcc_images/NFCC_Profile.png";
import NFCCServiceSetup from "../../assets/nfcc_images/NFCC_ServiceSetup1.png";
import NFCCVideoAgencies from "../../assets/nfcc_images/NFCC_VideoAgencies.png";

import ShelterWebchat1 from "../../assets/shelter_images/ShelterWebchat1.png";
import ShelterWebchat2 from "../../assets/shelter_images/ShelterWebchat2.png";
import ShelterWebchat3 from "../../assets/shelter_images/ShelterWebchat3.png";
import ShelterWebchat4 from "../../assets/shelter_images/ShelterWebchat4.png";
import ShelterWebchat5 from "../../assets/shelter_images/ShelterWebchat5.png";
import ShelterWebchat6 from "../../assets/shelter_images/ShelterWebchat6.png";

export const CaseStudyImageConfig = {
  shelter: {
    images: [
      { name: "Webchat1", image: ShelterWebchat1 },
      { name: "Webchat2", image: ShelterWebchat2 },
      { name: "Webchat3", image: ShelterWebchat3 },
      { name: "Webchat4", image: ShelterWebchat4 },
      { name: "Webchat5", image: ShelterWebchat5 },
      { name: "Webchat6", image: ShelterWebchat6 },
    ],
    imageWidth: 240,
    imageHeight: 400,
    row1Duration: 90,
    row2Duration: 70,
  },
  nfcc: {
    images: [
      { name: "WizardStart", image: NFCCWireframe },
      { name: "Agencies", image: NFCCAgencies },
      { name: "Billing", image: NFCCBilling },
      { name: "Holidays", image: NFCCHolidays },
      { name: "Insights", image: NFCCInsights },
      { name: "ManageServices1", image: NFCCManageServices1 },
      { name: "ManageServices2", image: NFCCManageServices2 },
      { name: "Profile", image: NFCCProfile },
      { name: "ServiceSetup", image: NFCCServiceSetup },
      { name: "VideoAgencies", image: NFCCVideoAgencies },
    ],
    imageWidth: 320,
    imageHeight: 240,
    row1Duration: 120,
    row2Duration: 140,
  },
};