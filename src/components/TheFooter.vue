<template>
  <footer class="footer">
    <h5 class="footer__author">Author info:</h5>
    <ul class="footer__info">
      <li>name: Konstantyn Kravchenko</li>
      <li
        >github:
        <RouterLink to="https://github.com/kashtan1231" target="_blank">
          https://github.com/kashtan1231
        </RouterLink>
      </li>
      <li
        >linkedIn:
        <RouterLink to="https://www.linkedin.com/in/konstatin-kravchenko-5b36b6234" target="_blank">
          https://www.linkedin.com/in/konstatin-kravchenko-5b36b6234
        </RouterLink>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    gap: 32px;
    padding: 32px;
    background-color: $yellow;

    &__info {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
</style>
