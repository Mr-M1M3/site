<script>
    import Icon from "@iconify/svelte";
    let pass_show = false;
</script>
<form method="POST" class="bg-theme-gray px-4 py-5 my-5 rounded-lg flex flex-col justify-center items-start">
    <div class="input-wrapper">
    <label for="name">What should we call you?</label>
    <input type="text" name="name" id="name"x placeholder="Name" required>
    </div>
    <div class="input-wrapper">
    <label for="email">Your E-Mail Address?</label>
    <input type="email" name="email" id="email" placeholder="E-Mail" required>
    </div>
    <div class="input-wrapper">
    <label for="pasword">Keep Your Account Secured</label>
    <div class="flex justify-center items-center">
        <input type="{pass_show ? 'text' : 'password'}" name="password" id="password" placeholder="Password" class="h-full w-full bg-transparent outline-none" required>
        <p class="text-theme-primary cursor-pointer" on:click={() => {pass_show = !pass_show}}><Icon icon="{pass_show ? 'mdi:hide-outline' : 'mdi:show-outline'}"/></p>
    </div>
    </div>
    <div class="input-wrapper">
    <label for="password_confirm">Did you type your password right?</label>
    <input type="{pass_show ? 'text' : 'password'}" name="password_confirm" id="password_confirm" placeholder="Confirm Password" required>
    </div>
    <button type="submit" class="w-full bg-theme-primary text-lg font-theme-rubik font-semibold flex justify-center items-center p-2 mt-4 mb-1 rounded-lg">Join Us</button>
    <p class="text-white w-full text-right font-theme-rubik">Already inspiring others? <a href="#" class="text-theme-primary">Log In</a></p>
</form>
<style>
    .input-wrapper{
        @apply my-2 flex flex-col w-full text-white font-theme-inter text-lg;
    }
    label{
        @apply my-2 capitalize;
    }
    input:not(#password), .input-wrapper > div{
        @apply bg-theme-black px-3 py-2 rounded-tl-lg rounded-tr-lg w-full border-b-2 border-theme-primary outline-none;
    }
</style>