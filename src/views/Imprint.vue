<template>
    <div class="impressum">
      <Header />
      <div class="content">
        <div class="title">Imprint</div>
        <div class="updated-date">Last updated: Friday, 16 October 2024</div>
        
        <p>Information in accordance with Section 5 TMG (Telemedia Act):</p>
        
        <p>
          Nertivia <br />
          We don't yet have a headquarters and therefore no mailbox<br />
          United Kingdom
        </p>
  
        <div class="sub-title">Represented by:</div>
        <p>
          Jason Michael Schmitz
        </p>
  
        <div class="sub-title">Contact:</div>
        <p>
          Phone: +49 (0) 1525 9685048 (Dont call it)<br />
          Email: <a href="mailto:support@nertivia.com">support@nertivia.com</a>
        </p>
  
        <div class="sub-title">Responsible for content according to Section 55 (2) RStV:</div>
        <p>
          Jason Michael Schmitz <br />
          Bergstraße 2a <br />
          66265 Heusweiler <br />
          Germany
        </p>
  
        <div class="sub-title">Disclaimer:</div>
        <div class="sub-title">Liability for content</div>
        <p>
          As a service provider, we are responsible for our own content on these pages in accordance with Section 7 (1) of the TMG. However, according to Sections 8 to 10 of the TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
        </p>
  
        <div class="sub-title">Liability for links</div>
        <p>
          Our website contains links to external websites of third parties, over whose content we have no control. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the content of the linked pages.
        </p>
  
        <div class="sub-title">Important Notice:</div>
        <p>
          It is not permitted to send any mail to the above address. Any postal communication will be prosecuted under criminal law.
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Header from "@/components/home-page/Header.vue";
  
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Home",
    components: { Header },
  });
  </script>
  
  <style scoped lang="scss">
  .impressum {
    color: white;
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: center;
    align-content: center;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .sub-title {
    font-weight: bold;
  }
  .updated-date {
    font-size: 12px;
    opacity: 0.8;
  }
  .content {
    max-width: 700px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
  }
  </style>
  
