<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('business_id')->nullable();
            $table->integer('role_id')->nullable();
            $table->integer('id_user_create')->nullable();
            $table->integer('id_user_update')->nullable();
            $table->string('firstName')->nullable();
            $table->string('lastName')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->integer('ennable_appointment_booking')->nullable();
            $table->text('notes')->nullable();
            $table->datetime('start_date')->nullable();
            $table->datetime('end_date')->nullable();
            $table->string('appointment_color')->nullable();
            $table->string('dial_code')->nullable();
            $table->integer('first_login')->nullable();
            $table->decimal('service_commission', 18, 2)->nullable();
            $table->decimal('product_commission', 18, 2)->nullable();
            $table->decimal('voucher_sales_commission', 18, 2)->nullable();
            $table->integer('sort_order')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
