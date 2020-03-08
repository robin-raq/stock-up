class CreateHoldings < ActiveRecord::Migration[6.0]
  def change
    create_table :holdings do |t|
      t.string :ticker
      t.integer :quantity
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
