<template>
  <footer class="footer">
    <h5 class="footer__author">Author info:</h5>
    <ul class="footer__info">
      <li>name: Konstantyn Kravchenko</li>
      <li
        >github:
        <a href="https://github.com/kashtan1231" target="_blank"> link </a>
      </li>
      <li
        >linkedIn:
        <a href="https://www.linkedin.com/in/konstatin-kravchenko-5b36b6234" target="_blank">
          link
        </a>
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

    @media screen and (max-width: $mobile) {
      gap: 16px;
      padding: 16px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder */
        @extend p;
      }
    }
  }
</style>
