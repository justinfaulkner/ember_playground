class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name
      t.string :image_url
      t.integer :cents

      t.timestamps
    end
  end
end
