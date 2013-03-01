class CreateTabs < ActiveRecord::Migration
  def change
    create_table :tabs do |t|
      t.string :name
      t.integer :table_id

      t.timestamps
    end
  end
end
