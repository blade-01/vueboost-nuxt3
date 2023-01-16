<template>
  <form @submit.prevent>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <ReusablesBaseInput
        label="Custom"
        v-model="state.username"
        type="text"
        :error="v$.username.$error"
        error-message="Custom is required"
        @blur="v$.username.$touch()"
        @focus="v$.username.$reset()"
      />
      <ReusablesBaseInput
        v-model="state.name"
        label="Full Name"
        type="text"
        :error="v$.name.$error"
        @blur="v$.name.$touch()"
        @focus="v$.name.$reset()"
      />
      <ReusablesBaseInput
        v-model="state.email"
        label="Email"
        type="email"
        :error="v$.email.$error"
        @blur="v$.email.$touch()"
        @focus="v$.email.$reset()"
      />
      <ReusablesBaseFile
        v-model="state.image"
        label="Image"
        file-type="image/*"
        :error="v$.image.$error"
        @blur="v$.image.$touch()"
        @focus="v$.image.$reset()"
      />
      <ReusablesBaseInput
        v-model="state.password"
        label="Password"
        :type="type"
        password
        :error="v$.password.$error"
        @blur="v$.password.$touch()"
        @focus="v$.password.$reset()"
        @change-type="showPassword"
      />
      <ReusablesBaseSelect
        v-model="state.gender"
        label="Gender"
        :options="genders"
        placeholder="Select your gender"
        :error="v$.gender.$error"
        @blur="v$.gender.$touch()"
        @focus="v$.gender.$reset()"
      />
      <!-- <ReusablesBasePhone
        class="md:col-span-2"
        v-model="state.phoneNumber"
        label="Phone Number"
        :placeholder="'Phone Number'"
        :error="v$.phoneNumber.$error"
        @blur="v$.phoneNumber.$touch()"
        @focus="v$.phoneNumber.$reset()"
        @handle-validation="handleValidation"
      /> -->
      <ReusablesBaseTextarea
        class="md:col-span-2"
        v-model="state.message"
        label="Message"
        rows="3"
        :error="v$.message.$error"
        @blur="v$.message.$touch()"
        @focus="v$.message.$reset()"
      />
      <ReusablesBaseEditor
        class="md:col-span-2"
        v-model="state.editor"
        label="Editor"
        placeholder="Place contents here..."
        error-message="Please type in something, anything 😞"
        :error="v$.editor.$error"
        @blur="v$.editor.$touch()"
        @focus="v$.editor.$reset()"
      />
    </div>
    <div class="flex justify-end mt-5">
      <ReusablesBaseSubmitBtn label="Submit" @click="submitForm" />
    </div>
  </form>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

// Used for showing password
const { type, showPassword } = usePassword()

// Used for dropdown list
const genders = ['male', 'female']

// Form inputs
const state = reactive<{
  username: string
  name: string
  email: string
  password: string | number
  image: string
  message: string
  gender: string
  // phoneNumber: string | number
  editor: string
}>({
  username: '',
  name: '',
  email: '',
  password: '',
  image: '',
  message: '',
  gender: '',
  // phoneNumber: '',
  editor: ''
})

// Mobile Number Validation
let inputValue = reactive<any>('') // inputValue.nationalNumber (for phone number), inputValue.countryCallingCode (for calling code +234 etc.)
const handleValidation = ($event: Event) => {
  inputValue = $event
}

// Validation rules
const rules = {
  username: { required },
  name: { required },
  email: { required, email },
  password: { required },
  image: { required },
  message: { required },
  gender: { required },
  // phoneNumber: {
  //   required,
  //   minLength: minLength(8),
  //   maxLength: maxLength(11)
  // },
  editor: { required }
}
const v$ = useVuelidate(rules, state)

// Submit form
const submitForm = () => {
  if (v$.value.$invalid) {
    v$.value.$validate()
  } else {
    console.log('Form Input:', state)
  }
}
</script>

<style scoped></style>
