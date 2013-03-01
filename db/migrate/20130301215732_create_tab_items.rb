class CreateTabItems < ActiveRecord::Migration
  def change
    create_table :tab_items do |t|
      t.string :name
      t.integer :cents
      t.integer :tab_id

      t.timestamps
    end
  end
end
