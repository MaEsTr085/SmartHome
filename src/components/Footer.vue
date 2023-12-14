<template>
    <footer>
      <div class="footer-content">
        <div class="contact-info">
          <p>Телефон: {{ phoneNumber }}</p>
          <p>Юридический адрес: {{ legalAddress }}</p>
        </div>
        <div class="social-links">
          <a class="social-links-a" href="" target="_blank" rel="noopener noreferrer"><img src="../assets/VK.svg" alt="">VK</a>
          <a class="social-links-a" href="" target="_blank" rel="noopener noreferrer"><img src="../assets/Pinterest.svg" alt="">Pinterest</a>
          <a class="social-links-a" href="" target="_blank" rel="noopener noreferrer"><img src="../assets/Telegram.svg" alt="">Telegram</a>
          <!-- Добавьте другие социальные сети по аналогии -->
        </div>
      </div>
      <p>&copy; 2023 Smart Home. Все права защищены. Made with <span style="color: #dd3333;">&#10084;</span></p>
    </footer>
</template>
  
<script>
export default {
name: 'FooterComp',
data() {
    return {
    phoneNumber: '+7 (961) 923-0737', // Замените на ваш номер телефона
    legalAddress: 'Ваш юридический адрес', // Замените на ваш юридический адрес
    };
},
};
</script>

<style scoped>
/* Стили для вашего футера */
footer {
    background-color: #1C2323;
    color: #fff;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.contact-info {
    text-align: left;
}

.social-links {
    display: flex;
}

.social-links a {
    color: #fff;
    margin-right: 10px;
    text-decoration: none;
}

.social-links img {
    width: 35px;
}

.social-links-a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>