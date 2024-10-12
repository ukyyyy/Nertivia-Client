<template>
    <div class="landing-page">
      <Header />
      <div class="content">
        <div class="title">We Need Volunteer Developers!</div>
        <div class="updated-date">Last updated: Friday 11 October 2024</div>
        <p>
          We are looking for passionate developers to join our team and contribute to an exciting project! This is a volunteer (unpaid) opportunity where you can help build something amazing.
        </p>
  
        <p>
          This is a great chance to build your skills, collaborate with a motivated team, and gain experience working on real-world projects.
        </p>
  
        <p>
          Requirements:
        </p>
        <ul>
          <li>Passion for coding and development</li>
          <li>Willingness to work in a team</li>
          <li>Basic experience in web or software development</li>
        </ul>
  
        <p>
          If you're interested in volunteering, please fill out the form below:
        </p>
  
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">Name:</label>
            <input type="text" id="username" v-model="formData.username" required />
          </div>
  
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
  
          <div class="form-group">
            <label for="skills">What are your development skills?</label>
            <textarea id="skills" v-model="formData.skills" required></textarea>
          </div>
  
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Header from "@/components/home-page/Header.vue";
  import { defineComponent } from "vue";
  import axios from "axios";
  
  export default defineComponent({
    name: "LandingPage",
    components: { Header },
    data() {
      return {
        formData: {
          username: '',
          email: '',
          skills: ''
        }
      };
    },
    methods: {
      async submitForm() {
        const webhookUrl = 'https://discord.com/api/webhooks/1292980138102751232/KbEDN5YU9rZtDKaeHLmqCHWHbM71sF1h1k6inviGAI3RuO2siZUSPLCrbNL70Rv80f1z';
        const payload = {
          content: `New Volunteer Application:\n**Name:** ${this.formData.username}\n**Email:** ${this.formData.email}\n**Skills:** ${this.formData.skills}`
        };
  
        try {
          await axios.post(webhookUrl, payload);
          alert('Your application has been submitted! Thank you for volunteering!');
          this.resetForm();
        } catch (error) {
          console.error('Error sending data to Discord:', error);
          alert('There was an error submitting your application. Please try again.');
        }
      },
      resetForm() {
        this.formData.username = '';
        this.formData.email = '';
        this.formData.skills = '';
      }
    }
  });
  </script>
  
  <style scoped lang="scss">
  .landing-page {
    color: white;
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: center;
    align-content: center;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .updated-date {
    font-size: 12px;
    opacity: 0.8;
  }
  
  .content {
    max-width: 700px;
    margin: 30px 10px;
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #2a2a2a;
    color: white;
  }
  
  textarea {
    resize: vertical;
  }
  
  button {
    padding: 10px 15px;
    background-color: #3cacf4;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
