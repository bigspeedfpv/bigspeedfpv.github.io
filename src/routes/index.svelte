<script>
</script>

<svelte:head>
  <title>Home | bigspeed</title>
</svelte:head>
<div class="container">
  <img class="profile" src="/bigspeed.jpg" alt="bigspeed" />
  <div class="text-container">
    <span class="hello">Hi! I'm <strong>Andrew</strong>.</span>
    <span class="subtitle">I'm a 15-year-old FPV drone pilot and web developer from North Carolina.</span>
    <div class="social-container">
      <div class="social github">
        <img class="social-icon" src="/github.svg" alt="Github logo" />
        <span class="social-label">bigspeedfpv</span>
      </div>
      <div class="social youtube">
        <img class="social-icon" src="/youtube.svg" alt="YouTube logo" />
        <span class="social-label">bigspeed</span>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  .profile {
    width: 250px;
    height: 250px;
    border-radius: 125px;

    object-fit: cover;

    filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.2));
  }

  .text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .hello {
    font-size: 60px;
    max-width: 500px;
    text-align: center;
  }

  .subtitle {
    font-size: 30px;
    max-width: 550px;
    text-align: center;
  }

  .social-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
  }

  .social {
    display: flex;
    gap: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;

    color: white;
    font-weight: bold;
    font-size: 24px;

    border-radius: 10px;
    width: 100%;
  }

  .github {
    background-color: black;
  }
  .youtube {
    background-color: #ff0000;
  }

  .social-icon {
    height: 30px;
    filter: invert();
  }

  @media only screen and (max-width: 750px) {
    .container, .social-container {
      flex-direction: column;
    }
  }
</style>
