<script setup>
import router from '@/router'
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import axios from 'axios'

const route = useRoute()

const jobId = route.params.id

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})

const state = reactive({
  job: {},
  isLoading: true,
})

const toast = useToast()

const handleSubmit = async () => {
  const updatedJob = {
    title: form.title,
    type: form.type,
    location: form.location,
    description: form.description,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  }

  try {
    const response = await axios.put(`/api/jobs/${jobId}`, updatedJob)
    toast.success('Job Updated Successfully')
    router.push(`/jobs/${response.data.id}`)
  } catch (error) {
    console.error('Error fetching job', error)
    toast.error('Job Was Not Added')
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`)
    state.job = response.data
    // Populate inputs
    form.type = state.job.type
    form.title = state.job.title
    form.description = state.job.description
    form.salary = state.job.salary
    form.location = state.job.location
    form.company.name = state.job.company.name
    form.company.description = state.job.company.description
    form.company.contactEmail = state.job.company.contactEmail
    form.company.contactPhone = state.job.company.contactPhone
  } catch (error) {
    console.error('Error fetching job', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="container">
    <div class="">
      <form @submit.prevent="handleSubmit" class="form">
        <h2 class="">Edit Job</h2>

        <div class="form_wrapper">
          <label for="type" class="label">Job Type</label>
          <select
            v-model="form.type"
            id="type"
            name="type"
            class="select"
            required
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div class="form_wrapper">
          <label class="label">Job Listing Name</label>
          <input
            type="text"
            v-model="form.title"
            id="name"
            name="name"
            class=""
            placeholder="eg. Beautiful Apartment In Miami"
            required
          />
        </div>
        <div class="form_wrapper">
          <label for="description" class="label">Description</label>
          <textarea
            id="description"
            v-model="form.description"
            name="description"
            class=""
            rows="4"
            placeholder="Add any job duties, expectations, requirements, etc"
          ></textarea>
        </div>

        <div class="form_wrapper">
          <label for="type" class="label">Salary</label>
          <select
            id="salary"
            v-model="form.salary"
            name="salary"
            class=""
            required
          >
            <option value="Under $50K">under $50K</option>
            <option value="$50K - $60K">$50 - $60K</option>
            <option value="$60K - $70K">$60 - $70K</option>
            <option value="$70K - $80K">$70 - $80K</option>
            <option value="$80K - $90K">$80 - $90K</option>
            <option value="$90K - $100K">$90 - $100K</option>
            <option value="$100K - $125K">$100 - $125K</option>
            <option value="$125K - $150K">$125 - $150K</option>
            <option value="$150K - $175K">$150 - $175K</option>
            <option value="$175K - $200K">$175 - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </div>

        <div class="form_wrapper">
          <label class="label"> Location </label>
          <input
            type="text"
            v-model="form.location"
            id="location"
            name="location"
            class=""
            placeholder="Company Location"
            required
          />
        </div>

        <div class="company-info">
          <h3 class="company-info_title">Company Info</h3>

          <div class="form_wrapper">
            <label for="company" class="label">Company Name</label>
            <input
              type="text"
              v-model="form.company.name"
              id="company"
              name="company"
              class=""
              placeholder="Company Name"
            />
          </div>

          <div class="form_wrapper">
            <label for="company_description" class="label"
              >Company Description</label
            >
            <textarea
              id="company_description"
              v-model="form.company.description"
              name="company_description"
              class=""
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </div>

          <div class="form_wrapper">
            <label for="contact_email" class="label">Contact Email</label>
            <input
              type="email"
              v-model="form.company.contactEmail"
              id="contact_email"
              name="contact_email"
              class=""
              placeholder="Email address for applicants"
              required
            />
          </div>
          <div class="form_wrapper">
            <label for="contact_phone" class="label">Contact Phone</label>
            <input
              type="tel"
              v-model="form.company.contactPhone"
              id="contact_phone"
              name="contact_phone"
              class=""
              placeholder="Optional phone for applicants"
            />
          </div>
        </div>
        <div>
          <button class="btn update-btn" type="submit">Update Job</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form {
  width: 50%;
}
.form_wrapper {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input,
textarea {
  width: 65%;
  padding: 5px;
  resize: none;
}
select {
  width: 67%;
}
.company-info {
  margin: 20px 0;
}
.company-info_title {
  margin-bottom: 10px;
  color: var(--main-color);
}

.update-btn-btn {
  background-color: var(--main-color);
  color: var(--white);
}
</style>
