<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');
