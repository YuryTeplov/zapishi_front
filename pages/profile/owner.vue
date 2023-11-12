<template>
  <div class="ml-60">
    <CompanyList />

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
      data-te-toggle="modal"
      data-te-target="#exampleModalScrollable"
      data-te-ripple-init
      data-te-ripple-color="dark">
      Add
    </button>

    <div
      data-te-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModalScrollable"
      tabindex="-1"
      aria-labelledby="exampleModalScrollableLabel"
      aria-hidden="true">
      <div
        data-te-modal-dialog-ref
        class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
        <div
          class="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <!--Modal title-->
            <h5
              class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="exampleModalScrollableLabel">
              Modal title
            </h5>
            <!--Close button-->
            <button
              type="button"
              class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss
              aria-label="Close"> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!--Modal body-->
          <div class="relative overflow-y-auto p-4">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-600">Имя:</label>
                <input type="text" id="name" name="name" class="w-full border-gray-300 rounded-md p-2" value="John Doe">
            </div>
            
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
                <input type="email" id="email" name="email" class="w-full border-gray-300 rounded-md p-2" value="johndoe@example.com">
            </div>
            
            <div class="mb-4">
                <label for="phone" class="block text-sm font-medium text-gray-600">Номер телефона:</label>
                <input type="tel" id="phone" name="phone" class="w-full border-gray-300 rounded-md p-2" value="123-456-7890">
            </div>
          </div>

          <!--Modal footer-->
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <button
              type="button"
              class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color="light">
              Close
            </button>
            <button
              type="button"
              class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

export default {
  data: () => {
    return {
    }
  },
}
</script>
<script lang="ts" setup>

definePageMeta({
  layout: 'owner',
});

</script>