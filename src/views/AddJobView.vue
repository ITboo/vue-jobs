<script setup>
import router from '@/router'
import { reactive, computed } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const toast = useToast()

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

const rules = computed(() => ({
  type: { required },
  title: { required },
  description: { required },
  salary: { required },
  location: { required },
  company: {
    name: { required },
    description: { required },
    contactEmail: { required, email },
    contactPhone: { required },
  },
}))

const handleSubmit = async () => {
  const newJob = {
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
    const response = await axios.post('/api/jobs', newJob)
    toast.success('Job Added Successfully')
    router.push(`/jobs/${response.data.id}`)
  } catch (error) {
    toast.error('Job Was Not Added')
    console.error('Error fetching job', error)
  }
}
const v$ = useVuelidate(rules, form)

const validateForm = ({ prop }) => {
  const error = v$.value.$errors.find(el => el.$property === prop)
  console.log('ghj')
  return error && error.$message
}
</script>

<template>
  <section class="container">
    <div class="">
      <form @submit.prevent="handleSubmit" class="form">
        <h2 class="">Add Job</h2>

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
          <button class="add-btn btn" type="submit" @click="validateForm">
            Add Job
          </button>
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

.add-btn {
  background-color: var(--main-color);
  color: var(--white);
}
</style>
