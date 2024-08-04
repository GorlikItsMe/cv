<div align="center">
<img src=".github/screenshot.png" alt="Gorlik CV Template" title="Gorlik CV Template" height="300px" />

# CV Template

This is my CV template. It is a simple and clean template that can be used to create a CV. It is based on the [Next.js](https://nextjs.org/) framework and uses [Tailwind CSS](https://tailwindcss.com/) for styling.
</div>

## How to use it?

All settings are stored as environment variables. You can create a `.env.local` file and set your own values. Example values are stored in the `.env.example` file.

```bash
cp .env.example .env.local
# edit .env.local and set your own values
npm run dev
# print page as PDF (use CTRL + P in your browser)
```

## About printing

You can print the page as PDF using your browser. Just press `CTRL + P` and select the option to save the page as PDF.

* Do not use Firefox to print. Text will not be selectable and automatic parsers used by HR departments will not be able to read the text.
* Use Chromium based browser (ex: Google Chrome) to print.
* Select `Save as PDF`. Do not use `Microsoft Print to PDF` or `Microsoft XPS Document Writer` as they will not generate a correct PDF. Text will not be selectable.

## Why? You should use xyz

First time I used some generators to create a CV. But I never liked the results. Then I tried to create my own CV using Word or Canva, but that was painful. I also wanted to be able to quickly update my CV before sending it to a potential employer. So I decided to create my own template using technologies I know and love.
Also this is a great way to show my skills to potential employers.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

TLDR: Do whatever you want with it. 😊
