<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(App\Post::class, 50)->create();
        factory(App\category::class, 50)->create();
        factory(App\User::class, 50)->create();
    }
}
