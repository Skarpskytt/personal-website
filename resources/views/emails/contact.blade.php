<x-mail::message>
# New Contact Form Submission

You have received a new message from your portfolio website.

**From:** {{ $name }}

**Email:** {{ $email }}

**Subject:** {{ $subject }}

---

## Message:

{{ $messageContent }}

---

<x-mail::button :url="'mailto:' . $email">
Reply to {{ $name }}
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
