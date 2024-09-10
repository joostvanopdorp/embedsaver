import { submitEmbed } from './firebaseConfig.js';

const form = document.getElementById('embedForm') as HTMLFormElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = (document.getElementById('title') as HTMLInputElement).value;
    const date = new Date();
    const code = (document.getElementById('code') as HTMLTextAreaElement).value;
    const brand = (document.getElementById('brand') as HTMLSelectElement).value;

    const embed = { title, date, code, brand };

    await submitEmbed(embed);
    location.reload(); // Reload to update the list
});