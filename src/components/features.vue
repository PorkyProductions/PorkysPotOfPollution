<template>
    <div class="bg-white dark:bg-gray-900 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-lg font-semibold text-theme-salmon">What to expect</h2>
          <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-theme-fire sm:text-4xl">We give you the most opinionated views on everything</p>
          <p class="mt-4 max-w-2xl text-xl text-theme-darkRed lg:mx-auto">(most of them are just us trashing on things we dont like)</p>
        </div>
  
        <div class="mt-10">
          <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-theme-coral text-white">
                  <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-600">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import radioactive from 'bootstrap-icons/icons/radioactive.svg'
  import dizzy from 'bootstrap-icons/icons/emoji-dizzy.svg'
  import exclamationTriangle from 'bootstrap-icons/icons/exclamation-triangle.svg'
  import star from 'bootstrap-icons/icons/star.svg'
  
  const features = [
    {
      name: 'Opinions, gone nuclear',
      description:
        'Our opinions are so destructive that some people would consider them to be NUCLEAR.',
      icon: radioactive,
    },
    {
      name: 'Killing reputations since 2022',
      description:
        'These posts WILL make your realize how bad some things are, effectively, killing their reputation.',
      icon: dizzy,
    },
    {
      name: 'Quite Dangerous',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: exclamationTriangle,
    },
    {
      name: 'Quite funny also',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: star,
    },
  ]
</script>