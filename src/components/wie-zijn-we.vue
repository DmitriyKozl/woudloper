<template>
  <div class="info">
    <h2>Wie zijn wij nu eigenlijk</h2>
    <div class="info_content">
      <div class="info_content_left">
        <h3>Lorem</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor omnis
          nesciunt, vero vitae veritatis quam, perspiciatis necessitatibus,
          ullam neque ad possimus nam maiores inventore dignissimos rerum.
          Tempora enim obcaecati odit laboriosam illo ipsum esse dolorum?
          Provident voluptates architecto autem error! Mollitia neque ab commodi
          distinctio tenetur eos! Ad, eius quod.
        </p>
      </div>
      <div class="info_content_right">
        <h3>Lorem</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor omnis
          nesciunt, vero vitae veritatis quam, perspiciatis necessitatibus,
          ullam neque ad possimus nam maiores inventore dignissimos rerum.
          Tempora enim obcaecati odit laboriosam illo ipsum esse dolorum?
          Provident voluptates architecto autem error! Mollitia neque ab commodi
          distinctio tenetur eos! Ad, eius quod.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WieZijnWe',
};
</script>

<style lang="scss">
.info {
  text-align: left;
  margin: auto;
  background-color: #264653;
  h2 {
    max-width: 1200px;
    text-align: center;
    margin: auto;
    padding: 2rem 1rem 0;
    font-size: 2.5rem;
    color: white;
    &::after {
      display: block;
      content: ' ';
      width: 50px;
      height: 5px;
      background-color: white;
      margin: 1rem auto;
    }
  }
  .info_content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: auto;

    &_left,
    &_right {
      color: white;
      padding: 1rem 2rem 3rem 0;
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
