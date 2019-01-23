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
            $table->integer('business_id');
            $table->integer('role_id');
            $table->integer('id_user_create');
            $table->integer('id_user_update');
            $table->string('firstName');
            $table->string('lastName');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone');
            $table->integer('ennable_appointment_booking');
            $table->text('notes');
            $table->datetime('start_date');
            $table->datetime('end_date');
            $table->string('appointment_color');
            $table->string('dial_code');
            $table->integer('first_login');
            $table->decimal('service_commission', 18, 2);
            $table->decimal('product_commission', 18, 2);
            $table->decimal('voucher_sales_commission', 18, 2);
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
