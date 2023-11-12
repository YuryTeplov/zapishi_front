<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">First</th>
                  <th scope="col" class="px-6 py-4">Last</th>
                  <th scope="col" class="px-6 py-4">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(k, v) in list"
                  :key="k"
                  class="border-b dark:border-neutral-500"
                  >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">{{ v.name }}</td>
                </tr>
              </tbody>
            </table>
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
      list: [{name: 'company'}]
    }
  },
}
</script>
