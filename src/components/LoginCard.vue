
<template>
    <v-row style="height: 100vh;">
        <v-card class="pa-4 mx-auto my-auto" width="344">
            <v-img src="@/assets/logo.png" class="pb-8 mx-auto" width="150"></v-img>
            <v-form
                v-model="form"
            >
                <v-text-field
                    class="mb-4"
                    label="User ID"
                    variant="outlined"
                    color="primary"
                    hide-details
                    clearable
                ></v-text-field>

                <v-text-field
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text': 'password'"
                    label="Password"
                    placeholder="Enter your password"
                    variant="outlined"
                    hide-details
                    color="primary"
                    @click:append="showPass = !showPass"
                ></v-text-field>

                <br>

                <v-btn
                    color="primary"
                    size="large"
                    type="submit"
                    variant="flat"
                    class="text-none"
                    block
                    to="/dashboard"
                >
                Log In
                </v-btn>

                <br>

                <v-divider></v-divider>

                <br>

                <v-btn
                    color="success"
                    size="large"
                    variant="flat"
                    class="text-none"
                    block
                >
                Register
                </v-btn>
            </v-form>
        </v-card>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';

import { useDisplay } from 'vuetify'

// eslint-disable-next-line no-unused-vars
const { smAndUp, mdAndUp } = useDisplay()

const form = ref(null)
const showPass = ref(false)
</script>